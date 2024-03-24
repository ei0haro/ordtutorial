
import React from "react";
import RaspberryPi from "@/public/images/raspberrypi.jpg";
import TopContentSubPages from "@/components/topcontentsubpages";
import OpenSsl from "@/public/images/opensslguide.png";
import OrdGit from "@/public/images/ordgit.png";
import ExpandableStep from "@/components/guide/expandableStep";

export default function OrdinalsGuide() {

    const steps = [
        {
            title: 'Step 1: Open a terminal (Linux and Mac) or Command Prompt (Windows) and navigate to the folder where you have ord.',
            content: 'You can always check all available commands yourself by running ord --help.',
            listItems: [
                '<b>Note:</b> You can always check all available commands yourself by running ord --help.',
            ],
            windowsContent: 'cd C:\\Path\\To\\Ord',
            linuxContent: 'cd /path/to/ord',
        }
    ];


    return (
        <section>

            <TopContentSubPages headerText="How to run ord against testnet and etch Runes" headerBody=""/>

            <div className="space-y-8 p-4">
                {steps.map((step, index) => (
                    <ExpandableStep key={index} title={step.title} content={step.content} linuxContent={step.linuxContent} windowsContent={step.windowsContent} listItems={step.listItems}/>
                ))}
            </div>
        </section>
    )
}

