
import React from "react";
import RaspberryPi from "@/public/images/raspberrypi.jpg";
import TopContentSubPages from "@/components/topcontentsubpages";
import OpenSsl from "@/public/images/opensslguide.png";
import OrdGit from "@/public/images/ordgit.png";
import ExpandableStep from "@/components/guide/expandableStep";

export default function OrdinalsGuide() {

    const steps = [
        {
            title: 'Step 1: Run and sync Bitcoin core testnet.',
            content: '......',
            listItems: [
                '<b>Note:</b> .',
            ],
            windowsContent: '',
            linuxContent: '',
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

