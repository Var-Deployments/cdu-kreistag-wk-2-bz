import React from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import SocialIcons from "@/components/social-icons";

const Footer = ({instance, socialLinks}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative w-[100vw] flex flex-col items-center justify-center p-4 text-gray-500 dark:text-gray-400">
            <div className="flex flex-col md:flex-row w-full justify-around mb-6">
                { /*
                <div className="flex flex-col justify-start items-center md:items-start">
                    <div className="hidden md:hidden">
                        <Logo instance={instance}>
                        </Logo>
                    </div>
                    <SocialIcons socialLinks={socialLinks}></SocialIcons>
                </div> */ }
            </div>
            <div
                className="w-full gap-y-4 md:gap-y-0 flex flex-col md:flex-row justify-between text-xs border-t dark:border-white/10 border-black/10 p-6 m-2 mx-8 pb-0 flex">
                <div className="flex flex-row md:max-w-fit gap-x-1 text-left">
                    <span>Copyright © {currentYear} {instance}.</span>
                    <span>All Rights Reserved.</span>
                </div>
                <div
                    className="flex flex-row gap-x-4 justify-center mt-0 md:mt-6 md:mt-0 items-center md:items-end">
                    <Link href="/legal/imprint" className="link-lite">
                        <span className="underline">Impressum</span>
                    </Link>
                    <Link href="/legal/privacy-policy" className="link-lite">
                        <span className="underline">Datenschutzerklärung</span>
                    </Link>
                </div>
                <div className="flex flex-row justify-center gap-x-1 items-center text-center">
                    <span>Proudly Open Source. </span>
                    <a className="underline link-lite"
                       href="https://github.com/eliahilse/cdu-local-template"
                    >View Repository</a>
                </div>
            </div>
        </footer>
    );
}

Footer.displayName = "Footer";
export default Footer;