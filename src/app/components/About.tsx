import Image from 'next/image';
import TiltedCard from './TiltedCard';

const About = () => {
    return (
        <section className="my-10">
            <h2 className="text-4xl font-bold mb-4 text-center">About</h2>
            <div className='ml-50'>
                <div className="flex items-center gap-18">
                    <TiltedCard
                        imageSrc="/About.jpg"
                        altText="Kendrick Lamar - GNX Album Cover"
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
                    <div className="items-center">
                        <p className=" font-regular text-lg pr-10">
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