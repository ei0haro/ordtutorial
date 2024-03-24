import Image, {StaticImageData} from 'next/image';
import React from "react";

interface HeaderWithImageProps {
    imageSrc: StaticImageData | string;

}

const HeaderWithImage: React.FC<HeaderWithImageProps> = ({ imageSrc }) => {
    return (
        <div className="h2 mb-4 text-center" data-aos="fade-up">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{marginTop: '10px'}}> {/* Adjust margin as needed */}
                    <div>{"Ord tutorial"}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderWithImage;
