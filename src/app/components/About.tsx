import Image from 'next/image';
import TiltedCard from './TiltedCard';

const About = () => {
    return (
<section className="my-10 px-4 sm:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center mt-20">About</h2>
    <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-18">
            <TiltedCard
                imageSrc="/About.jpg"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText='Design by Prachiti'
                containerHeight="250px"
                containerWidth="200px"
                imageHeight="250px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
            />
            <div className="flex-1 mt-6 md:mt-0 md:ml-8">
                <p className="font-regular text-base sm:text-lg pr-0 md:pr-10 text-center md:text-left">
                    Hi, I’m Prachiti Gongle — interior designer and creative storyteller. <br />
                    Design by Prachiti is all about crafting timeless, warm spaces and creating meaningful design content.
                    <br />
                    What started as a love for interiors is now growing into a space where design meets creativity — from styling tips and inspiration to real projects and stories.
                </p>
            </div>
        </div>
    </div>
</section>
    );
};

export default About;