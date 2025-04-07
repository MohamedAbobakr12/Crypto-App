import Image from 'next/image'

const Pricing = () => {
    return (
        <section className="flex bg-black h-max" id="pricing">
            <div className="flex flex-col items-center max-w-7xl w-full mx-auto mt-28 max-lg:mt-22 max-sm:mt-18 mb-24 max-lg:mb-18 max-sm:mb-12">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-white text-center font-bold">Affordable Pricing</h1>
                    <p className="max-lg:text-sm max-sm:text-xs text-white text-center font-medium w-[36rem] max-xl:w-[32rem] max-lg:w-[30rem] max-md:w-[28rem] max-sm:w-[24rem] max-xs:w-[20rem] leading-7 max-lg:leading-6 max-sm:leading-5 mt-6">A full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending and trading solutions tailored to your needs.</p>
                </div>
                <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-x-12 max-xl:gap-y-4 max-md:gap-y-0 w-max mt-12 max-lg:mt-8 max-sm:mt-4">
                    <div className="bg-pricing max-md:scale-[90%] max-sm:scale-[85%]">
                        <div className="flex justify-center mt-10">
                            <h1 className="flex gap-x-2 items-end text-primary font-medium"><span className="text-5xl font-bold">FREE</span>Forever</h1>
                        </div>
                        <div className="relative flex flex-col items-center top-24 mx-6">
                            <ul className="flex flex-col gap-y-8">
                                <li className="flex gap-x-2">
                                    <Image src={"/true.svg"} width={30} height={30} alt={"true icon"} />
                                    <p className="text-white font-medium">Searchable archive message up to 10K</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">10 appa or service integrations</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">5GB total file storage</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">Free Updated per month</p>
                                </li>
                            </ul>
                            <button className="text-white hover:text-black hover:bg-primary border-[3px] border-primary rounded-4xl cursor-pointer transition-colors duration-300 mt-8 px-8 max-md:px-6 py-3">Read More</button>
                        </div>
                    </div>

                    <div className="bg-pricing max-md:scale-[90%] max-sm:scale-[85%]">
                        <div className="flex justify-center mt-10">
                            <h1 className="flex gap-x-2 items-end text-primary font-medium"><span className="text-5xl font-bold">$20.00</span>PER<br /> USER/MONTH</h1>
                        </div>
                        <div className="relative flex flex-col items-center top-24 mx-6">
                            <ul className="flex flex-col gap-y-8">
                                <li className="flex gap-x-2">
                                    <Image src={"/true.svg"} width={30} height={30} alt={"true icon"} />
                                    <p className="text-white font-medium">Searchable archive message up to 10K</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">10 appa or service integrations</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">5GB total file storage</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">Free Updated per month</p>
                                </li>
                            </ul>
                            <button className="text-black hover:text-white bg-primary hover:bg-black border-[3px] border-primary rounded-4xl cursor-pointer transition-colors duration-300 mt-8 px-8 max-md:px-6 py-3">Read More</button>
                        </div>
                    </div>

                    <div className="bg-pricing max-md:scale-[90%] max-sm:scale-[85%]">
                        <div className="flex justify-center mt-10">
                            <h1 className="flex gap-x-2 items-end text-primary font-medium"><span className="text-5xl font-bold">$50.00</span>PER<br /> USER/MONTH</h1>
                        </div>
                        <div className="relative flex flex-col items-center top-24 mx-6">
                            <ul className="flex flex-col gap-y-8">
                                <li className="flex gap-x-2">
                                    <Image src={"/true.svg"} width={30} height={30} alt={"true icon"} />
                                    <p className="text-white font-medium">Searchable archive message up to 10K</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">10 appa or service integrations</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">5GB total file storage</p>
                                </li>
                                <li className="flex gap-x-2">
                                    <Image src={"/false.svg"} width={30} height={30} alt={"false icon"} />
                                    <p className="text-[#929292] font-medium">Free Updated per month</p>
                                </li>
                            </ul>
                            <button className="text-white hover:text-black hover:bg-primary border-[3px] border-primary rounded-4xl cursor-pointer transition-colors duration-300 mt-8 px-8 max-md:px-6 py-3">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing