import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className="bg-black h-max">
            <div className="border-2 border-primary" />
            <div className="max-w-7xl h-full mx-auto">
                <div className="flex max-md:flex-wrap max-xl justify-center max-md:justify-around max-md:items-center gap-x-18 max-xl:gap-x-14 max-lg:gap-x-8 px-4">
                    <div className="flex flex-col max-md:items-center">
                        <Image src={"/logo.svg"} width={80} height={100} alt={"logo image"} className="max-md:w-[4rem]" />
                        <p className="text-primary max-lg:text-sm max-md:text-center w-[14rem] max-md:w-[12rem] mt-12">NEVER MISS ANY UPDATED ABOUT US BY SUBSCRIBING TO OUR NEWSLETTER</p>
                        <div className="flex w-max border-b-2 border-[#929292] mt-12">
                            <input type="email" name="email" id="email" className="text-primary max-xl:w-[12rem] max-lg:w-[10rem] focus:outline-none placeholder:text-[#929292] px-2" placeholder="EMAIL" />
                            <Link href={"/"} className="flex items-center gap-x-2 text-sm text-primary font-semibold">SIGN UP
                                <Image src={"/sign-arrow.svg"} width={16} height={16} alt={"sign-arrow image"}></Image>
                            </Link>
                        </div>
                    </div>

                    <div className="mt-16 max-md:mt-10">
                        <ul className="grid grid-flow-col grid-rows-3 gap-x-8 max-lg:gap-x-4 gap-y-6 max-lg:gap-y-2 text-2xl max-xl:text-xl max-lg:text-lg max-md:text-sm font-bold">
                            <li className="text-white hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>Tokens</Link>
                            </li>
                            <li className="text-white hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>About</Link>
                            </li>
                            <li className="text-[#929292] hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>FAQ</Link>
                            </li>
                            <li className="text-white hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>Pricing</Link>
                            </li>
                            <li className="text-white hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>Team</Link>
                            </li>
                            <li className="text-[#929292] hover:text-primary w-max transition-colors duration-300">
                                <Link href={""}>Contact Us</Link>
                            </li>
                            <li className="text-white hover:text-primary w-max transition-colors duration-300 lg:-ml-12 max-lg:-ml-9 max-md:-ml-8">
                                <Link href={""}>Careers</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="max-md:mt-8">
                        <Image src={"/footer-card.svg"} width={300} height={100} alt={"footer-card image"} className="max-lg:w-[230px]" />
                    </div>
                </div>

                <div className="flex flex-col justify-center w-max mx-auto mt-16 max-lg:mt-12 max-md:mt-10">
                    <div className="border border-[#222715] w-[150%] -ml-32" />
                    <div className="flex max-lg:flex-col items-center gap-x-32 max-2xl:gap-x-24 max-xl:gap-x-8 max-md:gap-y-6 h-[100px] max-md:mt-4">
                        <p className="text-[#929292] text-lg max-sm:text-sm max-xs:text-xs text-nowrap">&#169; Crypto 128&#8228; All Rights Reserved 2023&#8228; <span className="font-bold">Licensing</span></p>
                        <div className="flex max-lg:flex-wrap max-md:flex-nowrap items-center gap-x-6 max-md:gap-x-4 max-xs:gap-x-2">
                            <p className="text-[#929292] text-lg max-md:text-sm max-sm:text-xs max-xs:text-[10px] text-nowrap font-semibold">Webflow Templates <span className="font-normal">by</span></p>
                            <p className="text-[#929292] text-lg max-md:text-sm max-sm:text-xs max-xs:text-[10px] text-nowrap font-semibold">128&#8228;digital&#8228;<span className="font-normal">Powered by</span></p>
                            <p className="text-[#929292] text-lg max-md:text-sm max-sm:text-xs max-xs:text-[10px] text-nowrap font-semibold">Webflow</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
