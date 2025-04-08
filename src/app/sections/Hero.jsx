import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-black h-max" id="home">
            <div className="mx-auto relative">
                <div className="max-w-7xl h-full mx-auto pt-16 relative z-10">
                    <div className="flex flex-col items-center mx-auto">
                        <h1 className="text-white text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-2xl text-center font-bold 2xl:leading-24 mt-10">
                            Trusted platform for crypto investments
                        </h1>
                        <p className="text-white text-lg max-md:text-sm text-center font-bold mt-12 max-md:mx-2">
                            Explore the crypto world, buy and sell crypto coints easily, trusted Crypto 128 to be your crypto market partner.
                        </p>
                        <Link href={"/"} className="flex justify-center place-items-center w-40 max-lg:w-36 h-14 text-center text-lg max-md:text-sm text-black hover:text-white bg-primary hover:bg-black transition-colors duration-300 border-[3px] border-primary hover:border-white rounded-4xl my-12">Get Started</Link>
                        <button className="flex justify-center w-16 max-lg:w-14 max-sm:w-12 h-16 max-lg:h-14 max-sm:h-12 bg-[#3C4C16] hover:bg-[#3b632e] rounded-full cursor-pointer"><Image width={15} height={15} src={"/play.svg"} alt={"play image"} /></button>
                        <h4 className="text-center text-white font-bold mt-8">How It Works</h4>
                        <Image width={450} height={90} src={"/visa.svg"} alt={"visa image"} className="max-md:w-96 max-sm:w-80 max-xs:w-64 mt-10" />
                    </div>
                </div>
                    <div className="relative mt-10 z-10">
                        <div className="absolute w-full h-20 bg-primary opacity-60" />
                        <div className="relative flex justify-center right-2 w-[110%] h-20 bg-primary rotate-[-4deg] max-md:rotate-[-6deg]">
                            <ul className="flex justify-center items-center gap-x-20 max-xl:gap-x-16 max-lg:gap-x-14 max-md:gap-x-10 max-sm:gap-x-6 max-xs:gap-x-4 mr-4 max-sm:mr-2">
                                <li className="rotate-[6deg]">
                                    <Image width={150} height={30} src={"/binance.svg"} alt={"binance image"} className="max-lg:w-24 max-md:w-20 max-sm:w-16 max-xs:w-14" />
                                </li>
                                <li className="rotate-[6deg]">
                                    <Image width={100} height={30} src={"/coinbase.svg"} alt={"coinbase image"} className="max-lg:w-24 max-md:w-20 max-sm:w-14 max-xs:w-12" />
                                </li>
                                <li className="rotate-[6deg]">
                                    <Image width={70} height={30} src={"/stripe.svg"} alt={"stripe image"} className="max-lg:w-18 max-md:w-14 max-sm:w-10 max-xs:w-8" />
                                </li>
                                <li className="rotate-[6deg]">
                                    <Image width={120} height={30} src={"/paypal.svg"} alt={"paypal image"} className="max-lg:w-24 max-md:w-20 max-sm:w-14 max-xs:w-12" />
                                </li>
                                <li className="rotate-[6deg]">
                                    <Image width={100} height={30} src={"/maze.svg"} alt={"maze image"} className="max-lg:w-24 max-md:w-20 max-sm:w-14 max-xs:w-12" />
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="bg-hero absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[6rem]" />
            </div>
        </section>
    );
}

export default Hero;
