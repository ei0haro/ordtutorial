import Image, {StaticImageData} from 'next/image';
import React from 'react';

interface StepProps {
    title: string;
    content: string;
    imageSrc: StaticImageData | undefined;
    listItems?: string[];
}

const Step: React.FC<StepProps> = ({ title, content, imageSrc, listItems }) => {
    const createMarkup = (htmlContent: string) => {
        return { __html: htmlContent };
    };
    return (
        <div className="mx-auto max-w-screen-md flex flex-col items-center space-y-4 bg-gray-800 p-4 rounded-lg shadow-md">

            <h2 className="text-xl font-bold">{title}</h2>

            <p dangerouslySetInnerHTML={createMarkup(content)}></p>
            {listItems && listItems.length > 0 && (
                <ul className="list-disc space-y-2 pl-5 ">
                    {listItems.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={createMarkup(item)}></li>
                    ))}
                </ul>
            )}
            {imageSrc && <Image height={405} src={imageSrc} alt={title} className="max-w-xs rounded-lg"/>}
        </div>
    );
};

export default Step;
