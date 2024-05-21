import fs from "fs";
import path from "path";
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import ShowcasedPeople from "@/components/showcased-people";
import MediumFeed from "@/components/medium-feed";
import LandingTyper from "@/components/landing-typer";

const landingPageConfig = JSON.parse(fs.readFileSync(
    path.join(process.cwd(), "config/landing-page.json")
), "utf8");

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

const socialConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/socials.json")
    ), "utf8");

const blogConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/blog.json")
    ), "utf8");

const candidatesConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/candidates.json")
    ), "utf8");

export default function Home() {
    let wrapperClasses = "absolute w-full h-full transform -translate-x-[50%] text-center z-20 text-transparent inline-block text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-300 dark:via-gray-50 dark:to-white bg-clip-text";
    return (
        <main
            className="flex min-h-screen max-w-[100vw] flex-col items-center justify-center p-2 md:p-24 !pb-0 bg-white dark:bg-neutral-950">
            <NavBar instance={namingConfig.officeName}/>
            <div className="relative w-[100vw] py-[40vh] md:py-[25vh] overflow-x-clip overflow-y-visible text-center h-[100vh]">
                {
                    landingPageConfig.headlineTextDynamic.enabled ?
                        (
                            <div className={wrapperClasses}>
                                {landingPageConfig.headlineTextDynamic.staticPart}
                                {landingPageConfig.headlineTextDynamic.linebreak ? (<br />) : null}
                                <LandingTyper
                                    interval={landingPageConfig.headlineTextDynamic.typingInterval}
                                    speed={landingPageConfig.headlineTextDynamic.typingSpeed}
                                    sequences={landingPageConfig.headlineTextDynamic.dynamicParts}
                                ></LandingTyper>
                            </div>
                        )
                        : (
                            <div
                                className={wrapperClasses}
                                dangerouslySetInnerHTML={{__html: landingPageConfig.headlineText}}>
                            </div>
                        )
                }
                <div className="z-10 opacity-50 dark:opacity-20 absolute -top-[20vh] left-0 w-[100vw]">
                    <img className="object-cover w-[100vw] h-[120vh]" src={landingPageConfig.headerBackgroundSrc}></img>
                </div>
                <div className="z-20 absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div>
            </div>
            <ShowcasedPeople candidates={candidatesConfig}/>
            <MediumFeed blog={blogConfig} />
            <Footer instance={namingConfig.instanceName} socialLinks={socialConfig}/>
        </main>
    );
}
