// ExpandableStep.tsx
'use client'
import React, { useState } from 'react';

interface ExpandableStepProps {
    title: string;
    content?: string;
    windowsContent: string;
    linuxContent: string;
    listItems?: string[];
}

const ExpandableStep: React.FC<ExpandableStepProps> = ({ title, content, windowsContent, linuxContent, listItems }) => {
    const [isWindowsOpen, setWindowsOpen] = useState(false);
    const [isLinuxOpen, setLinuxOpen] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState({ windows: 'Copy', linux: 'Copy' });

    const createMarkup = (htmlContent: string) => {
        return { __html: htmlContent };
    };

    const copyToClipboard = async (text: string, platform: 'windows' | 'linux') => {
        await navigator.clipboard.writeText(text);
        setCopyButtonText({ ...copyButtonText, [platform]: 'Copied!' });

        setTimeout(() => {
            setCopyButtonText({ ...copyButtonText, [platform]: 'Copy' });
        }, 2000); // Reset button text after 2 seconds
    };

    return (
        <div className="mx-auto max-w-screen-md flex flex-col space-y-4 bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
            {listItems && listItems.length > 0 && (
                <ul className="list-disc space-y-2 pl-5 ">
                    {listItems.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={createMarkup(item)}></li>
                    ))}
                </ul>
            )}
            <div
                onClick={() => setWindowsOpen(!isWindowsOpen)}
                className="cursor-pointer px-4 py-2 mt-2 bg-gray-700 text-white rounded hover:bg-gray-700 transition duration-300 flex justify-center items-center"
            >
                <div className="text-center">Windows</div>
            </div>
            {isWindowsOpen && (
                <div className="bg-gray-800 rounded text-left p-4">
                    <p dangerouslySetInnerHTML={createMarkup(windowsContent)}></p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the accordion from toggling
                            copyToClipboard(windowsContent, 'windows');
                        }}
                        className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-700 transition duration-300"
                    >
                        {copyButtonText.windows}
                    </button>
                </div>
            )}
            <div
                onClick={() => setLinuxOpen(!isLinuxOpen)}
                className="cursor-pointer px-4 py-2 mt-2 bg-gray-700 text-white rounded hover:bg-gray-700 transition duration-300 flex justify-center items-center"
            >
                <div className="text-center">Linux and Mac</div>
            </div>
            {isLinuxOpen && (
                <div className="bg-gray-800 rounded text-left p-4">
                    <p dangerouslySetInnerHTML={createMarkup(linuxContent)}></p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the accordion from toggling
                            copyToClipboard(linuxContent, 'linux');
                        }}
                        className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-700 transition duration-300"
                    >
                        {copyButtonText.linux}
                    </button>
                </div>
            )}
        </div>
    );
};


export default ExpandableStep;
