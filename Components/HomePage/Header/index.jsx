import { ImageContainer, Image } from '@/Components/Image';
import bg from './VeloceBG.jpg';
import logo from '@/Components/Navbar/logo.png';

const Header = () => {
    return (
        <>
            <div className="h-screen w-full overflow-hidden sm:min-h-screen sm:overflow-auto relative">
                <ImageContainer className="w-full h-full block relative">
                    <Image
                        width="1680" height="1680"
                        className="h-full w-full object-cover"
                        alt="background"
                        src={bg} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <Image src={logo} alt="l" width={150} height={150} className="h-24 w-24 md:h-40 md:w-40" />
                        <span className="ml-2 md:ml-3 text-white text-4xl md:text-8xl font-serif">V8Wardrobe</span>
                        <svg
                            className="mt-4 md:mt-6 absolute -bottom-80 md:-bottom-60 animate-bounce text-black h-8 w-8 md:h-12 md:w-12"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </ImageContainer>
            </div>
        </>
    )
}

export default Header;