
'use client'

import ClickableImage from "@/components/clickableImage";
import RaspberryPi from "@/public/images/raspberrypi.jpg";
import Ordinals from "@/public/images/ordinals.png";
import Runes from "@/public/images/runes.png";
import React from "react";


export default function FrontPageGrid() {

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-8">

                <ClickableImage
                    path="/ord"
                    imageSrc={Ordinals}
                    altText="ord"
                    text="Tutorial for ord"
                />

                <ClickableImage
                    path="/ordtestnet"
                    imageSrc={Runes}
                    altText="testnet"
                    text="Run ord (v0.16.0) on testnet and etch Runes"
                />

                <ClickableImage
                    path="/ordsignet"
                    imageSrc={Runes}
                    altText="signet"
                    text="Run ord (v0.17.0) on signet and etch Runes"
                />

                <ClickableImage
                    path="/buildord"
                    imageSrc={RaspberryPi}
                    altText="buildord"
                    text="Build ord for ARM64"
                />


            </div>
        </section>
    );


}

