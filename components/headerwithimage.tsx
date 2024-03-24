import Image, {StaticImageData} from 'next/image';
import React from "react";

interface HeaderWithImageProps {
    imageSrc: StaticImageData | string;

}

const HeaderWithImage: React.FC<HeaderWithImageProps> = ({ imageSrc }) => {
    return (
        <div className="h2 mb-4 text-center" data-aos="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'flex-start', justifyContent: 'center' }}>

                <div style={{ marginLeft: '10px' }}>
                    {/* Each row of text wrapped in its own div for individual alignment */}
                    <div style={{ textAlign: 'left' }}>{"Ord tutorial"}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderWithImage;
