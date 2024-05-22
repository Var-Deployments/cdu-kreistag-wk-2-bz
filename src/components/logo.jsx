import React from "react";
import Image from "next/image";

const Logo = ({instance}) => {

    return (
        <div className="flex flex-col my-3">
            <div className="flex flex-row items-center justify-start">
                <Image
                    src="/img/saxon-union-icon.png"
                    alt="Saxon Union Icon"
                    width={25}
                    height={25}/>
            <span className="ml-1.5 text-2xl font-bold -mb-1.5">
                    <span className="text-red-500">CDU</span>
                    <span className="ml-1.5 text-black dark:text-white">Bautzen</span>
            </span>
            </div>
            <span className="text-black dark:text-white mt-1"><span className="font-light">Kreistagswahl,</span> <span className="font-bold">Wahlkreis 2</span></span>
        </div>
    );
}

Logo.displayName = "Logo";
export default Logo;