import Image, {StaticImageData} from 'next/image';
import React from 'react';

interface NormalImageProps {
    imageSrc: StaticImageData | string;
    upperText: string;
    lowerText: string;
}

const NormalImage: React.FC<NormalImageProps> = ({ imageSrc, upperText, lowerText }) => {
    return (
        <div className="flex flex-col justify-items-center min-h-[400px] hover:cursor-pointer" data-aos="fade-up" data-aos-delay="400">
            <div className="flex-grow">
                <Image
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src={imageSrc}
                 //   width={700}
                    height={200}
                    alt="wizard x-profile"
                />
            </div>
            <p className="text-xl text-gray-400 mb-8 text-center font-bold max-w-md mx-auto">{upperText}<br/>{lowerText}</p>
        </div>
    );
};

export default NormalImage;
