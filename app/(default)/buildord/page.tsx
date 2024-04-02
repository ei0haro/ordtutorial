
import React from "react";
import RaspberryPi from "@/public/images/raspberrypi.jpg";
import TopContentSubPages from "@/components/topcontentsubpages";
import OpenSsl from "@/public/images/opensslguide.png";
import OrdGit from "@/public/images/ordgit.png";
import Step from "@/components/guide/step";

export default function OrdinalsGuide() {

    const steps = [
        {
            title: 'This is a guide on how to build a compatible version of ord for the Raspberry Pi 5',
            content: 'The Raspberry Pi uses an ARM64 processor, but the official ord client does not release builds for this architecture. So, this guide will show you how to build it yourself.',
            listItems: [
                '<b>Note:</b> I built this on Ubuntu, using WSL2 on Windows 11. I suppose a clean Linux Distro will work fine as well.',
                '<b>Note:</b> If you just want to get ord that runs on ARM64, you can download my pre-built it here. <a href="/data/ord-0.17.1-aarch64-unknown-linux-gnu.zip" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">ord-0.17.1-aarch64-unknown-linux-gnu.zip</a>',
            ],
        },

        {
            title: 'Step 1: openssl-sys',
            content: 'Building the ARM64 version of ord will require the openssl-sys crate to be built for ARM64 as well, so we start with that. There is a good guide on how to do it <a href="https://stackoverflow.com/questions/60821697/how-to-build-openssl-for-arm-linux" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">here</a>',
            listItems: [
                '<b>Note 1:</b> Before building you have to run the following in the terminal <b>export CFLAGS="-fPIC"</b> (so run it before the ./Configure part). This flag tells the compiler to generate position-independent code, which is necessary for shared libraries (which the openssl is).',
            ],
            imageUrl: OpenSsl
        },
        {
            title: 'Step 2: Downloading ord and install dependencies',
            content: 'Ok, lets get started with the cool stuff. First download the ord source code and install all dependencies that you need (like Rust and so on). This is well documented on the <a href="https://github.com/ordinals/ord" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">ord github</a>, go down to the section saying <b>Building</b>',
            imageUrl:OrdGit,
        },
        {
            title: 'Step 3: Add target ARM64 and install cross compiler',
            content: '',
            listItems: [
                '<b>ARM64 target:</b> <span style="background-color: #000000;"> rustup target add aarch64-unknown-linux-gnu</span>',
                '<b>Cross compiler:</b> <span style="background-color: #000000;"> sudo apt install gcc-aarch64-linux-gnu g++-aarch64-linux-gnu</span>',
            ],
        },
        {
            title: 'Step 4: Configure Cargo for Cross-Compilation',
            content: 'From root of the source code of ord, create file: <span style="background-color: #000000; display: block; text-align: center;"> .cargo/config.toml</span> <br>Then add the following to the file:<br><span style="background-color: #000000; "> [target.aarch64-unknown-linux-gnu]<br>' +
                'linker = "aarch64-linux-gnu-gcc"</span> ',
        },
        {
            title: 'Step 5: Set the location of the openssl build',
            content: 'We need to inform Cargo of the location of the OpenSSL build we completed in step 1. This is achieved by setting some environment variables, which can be done by executing the following command:<br><span style="background-color: #000000;"> export OPENSSL_DIR=/opt/openssl-1.1.1e <br>' +
                'export OPENSSL_LIB_DIR=/opt/openssl-1.1.1e/lib<br>' +
                'export OPENSSL_INCLUDE_DIR=/opt/openssl-1.1.1e/include<br>'+
                'export PKG_CONFIG_ALLOW_CROSS=1</span>',
            listItems: [
                '<b>Note:</b> The paths are the ones you used when building openssl in step 1. If you followed the guide, the paths should be the same. If you used different paths, adjust the commands accordingly.',
            ],
        },

        {
            title: 'Step 6: Build ord for ARM64',
            content: '<span style="background-color: #000000;"> cargo build --target aarch64-unknown-linux-gnu --release</span>'
        },
        {
            title: 'Step 7: That´s it',
            content: 'If everything went alright, the ord file should be in <span style="background-color: #000000;"> ./target/release/ord</span>'
        },
        {
            title: 'Info: Components',
            content: 'In my build, I have used the Raspberry Pi 5 with 8GB RAM and an M.2 disk. I do not know if Bitcoin Core and the ord client will run okay on lower versions like the Pi 4.',
            imageUrl:RaspberryPi,
            listItems: [
                'Raspberry Pi 5 8GB',
                'Active cooler',
                'Pimoroni M.2 NVMe Base Shield',
                '2TB M.2 SSD NVMe – Kioxia EXCERIA',
            ],
        },
        {
            title: 'Assembly and installing Raspberry Pi OS',
            content: 'Pimoroni provides excellent documentation for the assembly and installation of the OS on the M.2 disk. The guide is <a href="https://learn.pimoroni.com/article/getting-started-with-nvme-base" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">here</a>. I used the 64 bit Lite version',
            listItems: [
                '<b>Note 1:</b> At the end there is a step to enable PCIe 3, this made my Pi crash frequently so consider skipping this part.',
                '<b>Note 2:</b> I needed to resize the partition to use the full disk. The Raspberry Pi recognized the 2TB, but only part of it was used for the root filesystem.',
            ],
        },
    ];


    return (
        <section>

            <TopContentSubPages headerText="How to run ord on a Raspberry Pi 5" headerBody=""/>

            <div className="space-y-8 p-4">
                {steps.map((step, index) => (
                    <Step key={index} title={step.title} content={step.content} imageSrc={step.imageUrl} listItems={step.listItems}/>
                ))}
            </div>
        </section>
    )
}

