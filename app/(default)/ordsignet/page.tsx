
import React from "react";
import TopContentSubPages from "@/components/topcontentsubpages";
import ExpandableStep from "@/components/guide/expandableStep";
import Step from "@/components/guide/step";

export default function OrdinalsGuide() {
const stepsNoInstructions = [
    {
        title: 'Step 9: Check your Rune',
        content: 'If the Etching went OK the Runes should be indexed and can be seen on the ordinals signet webpage.',
        listItems: [
            'You can find it <a href="https://signet.ordinals.com/runes" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">here</a>.',
        ],
        imageUrl: undefined

    },]

    const steps = [
    {
            title: 'Step 1: Run and sync Bitcoin core on signet.',
            content: 'To run ord against signet we first need to run Bitcoin core in signet mode. This is done by adding a -signet flag to the start command:',
            listItems: [
                '<b>Note:</b> This guide is written for ord 0.17.0, there might be different commands using another version.',
                '<b>Note:</b> It is possible to run both signet and mainnet at the same time, but that requires to configuring different ports and data directories for the two setups.',
                '<b>Note:</b> This guide expects that bitcoin core does not run on mainnet. So either quit your existing running node or configure a new datadir for signet and also add -port=18333 (default port is 18332).',
                '<b>Note:</b> Syncing on signet is much faster then mainnet, but it still requires a few hours.',
            ],
            windowsContent: 'bitcoind.exe -datadir=D:\\btc\\data -txindex=1 -signet',
            linuxContent: './bitcoind -datadir=/btc/data -txindex=1 -signet',
        },
        {
            title: 'Step 2: Open a terminal (Linux and Mac) or Command Prompt (Windows) and navigate to the folder where you have ord.',
            listItems: [
                '<b>Note:</b> You can always check all available commands yourself by running ord --help.',
            ],
            windowsContent: 'cd C:\\Path\\To\\Ord',
            linuxContent: 'cd /path/to/ord',
        },
        {
            title: 'Step 3: Start the ord server against signet',
            content: 'To start the ord server, you need to run the following command in the terminal.',
            listItems: [
                '<b>Note:</b> Running the server will connect to your bitcoin core node and synchronize ord. You therefore need to specify the data dir of your bitcoin core node (the same folder you specified when starting bitcoin core on the signet).',
                '<b>Note:</b> The flag --index-runes is required to sync Runes and use the Rune specific commands.',
                '<b>Note:</b> A pre-indexed signet ord database can be downloaded here (choose the signet version): <a href="https://ordstuff.info/Downloads/indexes/0.17.x/" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">here</a>',
            ],
            windowsContent: 'ord.exe --data-dir D:\\Path\\To\\Ord --bitcoin-data-dir D:\\btc\\data --index-runes --signet server',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /btc/data --index-runes --signet server',
        },
        {
            title: 'Step 4: Create a wallet',
            content: 'When you create a new wallet, you will be returned a seed phrase. Backup this seed phrase in a safe place (you have done it with XVerse and all other wallets, same procedure here).',
            listItems: [
                '<b>Note:</b> You need to open a new terminal or command prompt to run new commands since the server is still running in the old terminal/command prompt.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes --signet wallet create',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes --signet wallet create',
        },
        {
            title: 'Step 5: Fund your wallet',
            content: 'Funding your wallet is a 2 way process. First you need to get the address of your wallet, then you need to send signet funds to that address. To get the address, run the following command in the terminal.',
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes --signet wallet receive',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes --signet wallet receive',
            listItems: [
                '<b>Note:</b> You need signet BTC to send to your address. Google BTC signet faucet and you should get some alternatives. signet faucets are usually unstable so try a bunch.',
            ],
        },
        {
            title: 'Step 6: Etch some Runes - Batch file',
            content: 'When the node is fully synced we can start with etching some runes. To do this, you need a batch yaml file with the Runes you want to etch.',
            listItems: [
                '<b>Note:</b> Create a file with the Rune content (adjust to your needs), example <a href="/data/etchRunes.yaml" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">etchRune.yaml</a>.',
                '<b>Note:</b> You also need to do an inscription (the Rune is linked to the inscription). This is also specified in the yaml file and in the example I have just used a text file with the name runeguardian.txt. This file need to be there, so create this file yourself and add some custom content.',
                '<b>Note:</b> You can also have a look at the official batch.yaml example file <a href="https://github.com/ordinals/ord/blob/master/batch.yaml" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">batch.yaml</a>.',
            ],
            windowsContent: '',
            linuxContent: '',
        },
        {
            title: 'Step 7: Etch the file you created in step 6',
            content: '',
            listItems: [
                '<b>Note:</b> When I was etching the Rune, it took some blocks before it was fully minted. I got a message saying that the Rune must Mature first, this message disappeared after some blocks, so just hang tight and wait.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --signet wallet batch --batch etchRunes.yaml --fee-rate 2',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --signet wallet batch --batch etchRunes.yaml --fee-rate 2',
        },
        {
            title: 'Step 8: Mint the Rune',
            content: 'Minting a Rune only requires fee and the name of the Rune you want to mint.',
            listItems: [
                '<b>Note:</b> as of 0.17.0 there is no destination flag, so you mint your Runes to the ord wallet itself. To transfer the Runes you need to use the wallet send command',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --signet wallet mint --fee-rate 2 --rune "RUNE•GUARDIAN•NODE•RUNNERS"',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --signet wallet mint --fee-rate 2 --rune "RUNE•GUARDIAN•NODE•RUNNERS"',
        },

    ];


    return (
        <section>

            <TopContentSubPages headerText="How to run ord against signet and etch Runes (works for v0.17.0)" headerBody=""/>

            <div className="space-y-8 p-4">
                {steps.map((step, index) => (
                    <ExpandableStep key={index} title={step.title} content={step.content}
                                    linuxContent={step.linuxContent} windowsContent={step.windowsContent}
                                    listItems={step.listItems}/>
                ))}
            </div>
            <div className="space-y-8 p-4">
                {stepsNoInstructions.map((step, index) => (
                    <Step key={index} title={step.title} content={step.content}
                          imageSrc={step.imageUrl}
                          listItems={step.listItems}/>
                ))}
            </div>
        </section>
    )
}

