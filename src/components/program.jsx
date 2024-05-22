"use client"

import React, {useState} from "react";

const Program = ({ config }) => {

    const [iframeOpen, setIframeOpen] = useState(false);

    const openIframe = () => {
        setIframeOpen(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeIframe = () => {
        setIframeOpen(false);
        document.body.classList.remove("overflow-hidden");
    };

    return (
        <div id="program" className={(iframeOpen ? "" : "overflow-hidden ") + "w-full flex flex-col justify-center items-center mb-[25vh] text-black dark:text-white overscroll-y-none"}>
            <h1 className="text-5xl font-bold mb-8 text-black dark:text-white" dangerouslySetInnerHTML={{__html: config.title}}></h1>
            <span className="text-2xl font-light -mt-3 text-center" dangerouslySetInnerHTML={{__html: config.subtitle}}></span>
            <div className={(iframeOpen ? "" : "hidden *hidden") + "fixed top-0 left-0 w-[100vw] h-[100vh] z-[200] backdrop-blur-lg backdrop-brightness-75 overscroll-y-none"}>
                <div onClick={closeIframe}
                     className="z-[220] fixed right-2 top-2 cursor-pointer rounded-lg p-3 bg-gray-300 dark:bg-neutral-800 hover:dark:bg-neutral-700 hover:bg-gray-400 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </div>
                <div className="fixed w-[100vw] h-[100vh] pt-9 pr-9 pb-3 pl-3 md:p-6 md:p-12">
                    <iframe src={config.iframe.url} className="rounded-xl w-full h-full"></iframe>
                </div>

            </div>
            <div
                onClick={openIframe}
                className={(iframeOpen ? "hidden" : "") + " cursor-pointer md:w-[25%] h-48 bg-black dark:bg-white !bg-opacity-0 hover:!bg-opacity-[2%] flex flex-row mt-8 justify-center items-center w-full  border transition-all duration-200 border-white dark:border-white !border-opacity-20 hover:!border-opacity-30 rounded-lg border-solid"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
                </svg>
                <span className="ml-6 text-2xl">Öffnen</span>
            </div>
        </div>
    );
}

Program.displayName = "Program";
export default Program;