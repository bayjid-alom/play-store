"use client";

import { InstalledAppsContext } from "@/context/InstalledAppsProvider";
import { useContext } from "react";

const InstallToggleButton = () => {

    const something = useContext(InstalledAppsContext);
    console.log(something, "some...");

    const handleInstallApp = () => {
        console.log("Button clicked");
    }


    return (
        <button
            onClick={() => handleInstallApp()}
            className="rounded-sm bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-600"
        >
            Install Now
        </button>
    );
};

export default InstallToggleButton;