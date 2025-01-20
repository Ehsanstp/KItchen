import { Spotlight } from './ui/AllUi';
import { TypewriterEffect } from './ui/AllUi';
import MagicButton from "./ui/AllUi"
import { IoFastFood } from "react-icons/io5";
const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="left-60 top-10 h-[100vh]" fill="white" />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                </div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center">
                    <TypewriterEffect
                        className="text-left md:text-6xl lg: text-5xl mb-4"
                        words={[
                            { text: "Ehsan's" },
                            { text: " " },
                            { text: "Kitchen" }
                        ]}
                        cursorClassName='md:text-6xl lg: text-5xl'
                    />                   
                    <p className="text-left tracking-widest text-xs md:text-sm lg:text-sm text-blue-100 mb-4 opacity-70">
                        I cook at Standard Temperature and Pressure, in my free time
                    </p>
                    <a href='#about'>
                        <MagicButton
                            title='See the menu'
                            icon={<IoFastFood />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Hero;