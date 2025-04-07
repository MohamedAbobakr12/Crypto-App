import Image from "next/image"
import Link from "next/link"


const Features = () => {
    return (
        <section className="flex flex-col bg-black h-max" id="pages">
            <div className="flex flex-col gap-y-20 max-w-5xl max-lg:max-w-max h-full lg:px-4 mx-auto mt-36 max-md:mt-18">
                <div className="flex gap-x-20 max-xl:gap-x-10 max-lg:gap-x-8 w-full max-md:flex-col md:justify-around mx-auto">
                    <div className="flex max-md:self-center max-md:items-center flex-col">
                        <h4 className="text-primary max-md:text-center font-semibold mt-16 max-md:mt-8">OUR FEATURE</h4>
                        <h1 className="text-white max-md:text-center text-4xl max-lg:text-3xl max-md:text-2xl max-xs:text-lg font-bold w-[30rem] max-xl:w-[28rem] max-lg:w-[24rem] max-md:w-[22rem] max-sm:w-[18rem] max-xs:w-[16rem] leading-14 max-lg:leading-10 max-md:leading-8 mx-auto mt-10 max-md:mt-6">Viewing long-term and short-term forecast</h1>
                        <p className="text-white max-md:text-center font-medium max-lg:text-sm w-[25.5rem] max-lg:w-[23rem] max-md:w-[22rem] max-sm:w-[19rem] mt-8 max-md:mt-4">Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.</p>
                        <Link href={"/"} className="flex justify-center place-items-center w-36 h-12 text-center lg:text-lg text-white hover:text-black hover:bg-primary transition-colors duration-300 border-[3px] border-primary rounded-4xl mt-12">Get Started</Link>
                    </div>
                    <Image width={475} height={200} src={"/phone-1.svg"} alt={"phone image"} className={"max-md:self-center max-xl:w-96 max-lg:w-[307px] max-sm:w-[255px] max-xl:mt-10"} />
                </div>



                <div className="flex gap-x-20 max-xl:gap-x-16 w-full max-md:flex-col md:justify-around mx-auto px-5">
                    <Image width={400} height={200} src={"/phone-2.svg"} alt={"phone image"} className={"max-md:self-center max-xl:w-96 max-lg:w-[300px] max-sm:w-[255px] max-xl:mt-10 max-md:order-1"} />
                    <div className="flex flex-col max-md:self-center max-lg:items-center max-lg:w-[25rem] max-md:w-[20rem]">
                        <h1 className="text-white max-lg:text-center text-4xl max-lg:text-2xl max-md:text-xl max-xs:text-lg font-bold w-[100%] max-lg:w-[20rem] max-sm:w-[18rem] max-xs:w-[16rem] leading-14 max-lg:leading-10 max-md:leading-8 mx-auto mt-16 max-md:mt-6">More than you think</h1>
                        <p className="text-white max-lg:text-center font-medium max-lg:text-sm w-[25.5rem] max-lg:w-[21rem] max-md:w-[20rem] max-sm:w-[16rem] mt-8 max-md:mt-4">Add funds to your cryptocurrency account to start trading cryptocurrencies. You can add funds using different payment methods.</p>
                        
                        <div className="flex max-lg:flex-col max-lg:gap-y-6 max-md:gap-y-8 items-center w-[30rem] mt-10">
                            <div className="flex flex-col max-lg:justify-center">
                                <div className="flex max-lg:justify-center max-lg:items-center gap-x-4">
                                    <Image src={"/productivity.svg"} width={20} height={20} alt={"productivity image"} />
                                    <h4 className="text-primary font-medium">
                                        Productivity
                                    </h4>
                                </div>
                                <p className="max-lg:text-center text-[#929292] text-xs max-lg:w-[16rem] leading-5 mt-4 max-md:mt-2">Dramatically reintermediate effective applications after high-payoff core competencies.</p>
                            </div>
                            <div>
                                <div className="flex max-lg:justify-center max-lg:items-center gap-x-4">
                                    <Image src={"/synchronize.svg"} width={20} height={20} alt={"synchronize image"} />
                                    <h4 className="text-primary font-medium">
                                        Synchronize
                                    </h4>
                                </div>
                                <p className="max-lg:text-center text-[#929292] text-xs max-lg:w-[16rem] leading-5 mt-4 max-md:mt-2">Dramatically reintermediate effective applications after high-payoff core competencies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features