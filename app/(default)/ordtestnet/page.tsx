
import React from "react";
import RaspberryPi from "@/public/images/raspberrypi.jpg";
import TopContentSubPages from "@/components/topcontentsubpages";
import OpenSsl from "@/public/images/opensslguide.png";
import OrdGit from "@/public/images/ordgit.png";
import ExpandableStep from "@/components/guide/expandableStep";
import Step from "@/components/guide/step";

export default function OrdinalsGuide() {
const stepsNoInstructions = [
    {
        title: 'Step 7: Check your Rune',
        content: 'If the Etching went OK the Runes should be indexed and can be seen on the ordinals testnet webpage.',
        listItems: [
            'You can find it <a href="https://testnet.ordinals.com/runes" target="_blank" rel="noopener noreferrer" style="color: #3490dc; font-weight: bold;">here</a>.',
        ],

    },]

    const steps = [
        {
            title: 'Step 1: Run and sync Bitcoin core on testnet.',
            content: 'To run ord against testnet we first need to run Bitcoin core in testnet mode. This is done by adding the following to your bitcoin.conf file:',
            listItems: [
                '<b>Note:</b> It is possible to run both testnet and mainnet at the same time, but that requires to configuring different ports and data directories for the two setups.',
                '<b>Note:</b> This guide expects that bitcoin core does not run on mainnet. So either quit your existing running node or configure a new datadir for testnet and also add -port=18333 (default port is 18332).',
                '<b>Note:</b> Syncing on testnet is much faster then mainnet, but it still requires a few hours.',
            ],
            windowsContent: 'bitcoind.exe -datadir=D:\\btc\\data -txindex=1 -testnet',
            linuxContent: './bitcoind -datadir=/btc/data -txindex=1 -testnet',
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
            title: 'Step 3: Start the ord server against testnet',
            content: 'To start the ord server, you need to run the following command in the terminal.',
            listItems: [
                '<b>Note:</b> Running the server will connect to your bitcoin core node and synchronize ord. You therefore need to specify the data dir of your bitcoin core node (the same folder you specified when starting bitcoin core on the testnet).',
                '<b>Note:</b> The flag --index-runes is required to sync Runes and use the Rune specific commands.',
            ],
            windowsContent: 'ord.exe --data-dir D:\\Path\\To\\Ord --bitcoin-data-dir D:\\btc\\data --index-runes --index-runes --testnet server',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /btc/data --index-runes --index-runes --testnet server',
        },
        {
            title: 'Step 4: Create a wallet',
            content: 'When you create a new wallet, you will be returned a seed phrase. Backup this seed phrase in a safe place (you have done it with XVerse and all other wallets, same procedure here).',
            listItems: [
                '<b>Note:</b> You need to open a new terminal or command prompt to run new commands since the server is still running in the old terminal/command prompt.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes --testnet wallet create',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes --testnet wallet create',
        },
        {
            title: 'Step 5: Fund your wallet',
            content: 'Funding your wallet is a 2 way process. First you need to get the address of your wallet, then you need to send Testnet funds to that address. To get the address, run the following command in the terminal.',
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes --testnet wallet receive',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes --testnet wallet receive',
            listItems: [
                '<b>Note:</b> You need testnet BTC to send to your address. Google BTC testnet faucet and you should get some alternatives. Testnet faucets are usually unstable to try a bunch.',
            ],
        },
        {
            title: 'Step 6: Etch some Runes',
            content: 'When the node is fully synced we can start with etching some runes.',
            listItems: [
                '--rune: Name of the Rune.',
                '--divisibility: How many decimals should your Rune have?',
                '--supply: Total supply',
                '--symbol: The symbol of the Rune.',
                '--fee-rate: sets the fee rate in sats/vByte for the etching. We are on testnet so 1-2 is enough.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes --testnet wallet etch --rune "MY•AWESOME•RUNE" --divisibility 10 --fee-rate 2 --supply 21000000 --symbol S',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes --testnet wallet etch --rune "MY•AWESOME•RUNE" --divisibility 10 --fee-rate 2 --supply 21000000 --symbol S',
        },

    ];


    return (
        <section>

            <TopContentSubPages headerText="How to run ord against testnet and etch Runes" headerBody=""/>

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

