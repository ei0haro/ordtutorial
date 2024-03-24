// Import necessary modules from Next.js and React
import Link from 'next/link';
import Image, {StaticImageData} from 'next/image';
import React from 'react';

// Define an interface for the component's props
interface ClickableImageProps {
    path: string; // For the Link href
    imageSrc: StaticImageData | string; // For the Image src, supporting both local and external images
    altText: string; // Alt text for the image for accessibility
    text: string; // Text to display below the image
}

// Define the functional component using the props interface
const ClickableImage: React.FC<ClickableImageProps> = ({ path, imageSrc, altText, text }) => {
    return (
        <Link href={path} passHref={true}>
            <div className="flex flex-col justify-items-center min-h-[400px] hover:cursor-pointer" data-aos="fade-up" data-aos-delay="400">
                <div className="flex-grow">
                    <Image
                        className="image max-w-full mx-auto md:max-w-none"
                        src={imageSrc}
                        //  width={440}
                        height={405}
                        alt={altText}
                    />
                    <p className="text-2xl text-gray-400 mb-8 text-center font-bold max-w-md mx-auto">{text}</p>
                </div>
            </div>
        </Link>
    );
};

export default ClickableImage;
