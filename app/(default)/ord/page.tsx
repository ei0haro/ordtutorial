
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
            listItems: [
                '<b>Note:</b> You can always check all available commands yourself by running ord --help.',
            ],
            windowsContent: 'cd C:\\Path\\To\\Ord',
            linuxContent: 'cd /path/to/ord',
        },
        {
            title: 'Step 2: Start the ord server',
            content: 'To start the ord server, you need to run the following command in the terminal.',
            listItems: [
                '<b>Note:</b> Running the server will connect to your bitcoin core node and synchronize ord. You therefore need to specify the data dir of your bitcoin core node (the same folder you specified when starting bitcoin core).',
                '<b>Note:</b> I usually save the ord database file in the same folder where I keep the ord executable (so I remember where it is), but you can put any dir you want. When upgrading you might need to delete it and re-index.',
                '<b>Note:</b> The flag --index-runes does not do anything on main net yet, but you can run it now anyways. Later on you need to have it to support Rune commands.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir --index-runes server',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir --index-runes server',
        },
        {
            title: 'Step 3: Create a wallet',
            content: 'When you create a new wallet, you will be returned a seed phrase. Backup this seed phrase in a safe place (you have done it with XVerse and all other wallets, same procedure here).',
            listItems: [
                '<b>Note:</b> You need to open a new terminal or command prompt to run new commands since the server is still running in the old terminal/command prompt.',
         ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir wallet create',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir wallet create',
        },
        {
            title: 'Step 4: Fund your wallet',
            content: 'Funding your wallet is a 2 way process. First you need to get the address of your wallet, then you need to send funds to that address. To get the address, run the following command in the terminal.',
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir wallet receive',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir wallet receive',
        },
        {
            title: 'Step 5: Inscribing an inscription',
            content: 'If your node is fully synced and you have funded your address, you can do an inscription (if you want).',
            listItems: [
                'You can inscribe directly to the ord address you created in step 4 or you can inscribe to another wallet with --destination, like your XVerse wallet. In the example below I have added a wallet, this is optional (skipping it will inscribe to the ord wallet)',
                'You need to specify fee rate with --fee-rate FEE_RATE, that is how many sats/vByte you are willing to pay for the inscription. The higher the fee rate, the faster the inscription will be included in the blockchain. (check mempool.space for current fee rates)',
                'You can specify how much postage your inscription should use with --postage. Default is 10000sat and you can lower this to 546sat if you want. This is the same option you need to set when you inscribe stuff on Unisat, there named Sats in inscription.',
                'You specify the file you want to inscribe with --file. This can be any type of file.',
                'REMEMBER, large files are expensive to inscribe, so test with a small text file first. If you add --dry-run you can see how much it will cost without actually inscribing anything. (you will get a response with how much it will cost)',
                'If everything goes OK, you will get a response with the inscription ID and transaction id. Check the transaction id on mempool.space to see when it is completed.',
            ],
            windowsContent: 'ord.exe --data-dir C:\\Path\\To\\Ord --bitcoin-data-dir C:\\Path\\To\\BitcoinDataDir wallet inscribe --destination XVERSE_ORDINALS_ADDRESS --fee-rate 20 --postage 546sat --file C:\\Path\\To\\Your\\File.txt',
            linuxContent: './ord --data-dir /path/to/ord --bitcoin-data-dir /path/to/bitcoindatadir wallet inscribe --destination XVERSE_ORDINALS_ADDRESS --fee-rate 20 --postage 546sat --file /path/to/your/file.txt',
        },
    ];


    return (
        <section>

            <TopContentSubPages headerText="How to run ord and do basic commands (works for v0.16)" headerBody="Note: This guide requires you to have a bitcoin core node fully synched and running to work"/>

            <div className="space-y-8 p-4">
                {steps.map((step, index) => (
                    <ExpandableStep key={index} title={step.title} content={step.content} linuxContent={step.linuxContent} windowsContent={step.windowsContent} listItems={step.listItems}/>
                ))}
            </div>
        </section>
    )
}

