import Image from 'next/image'

const Testimonials = () => {
    return (
        <section className="flex bg-black h-max" id="">
            <div className="max-w-6xl w-full mx-auto mt-14">
                <div className="flex max-xl:flex-col max-xl:items-center gap-x-20">
                    <Image src={"/testimonials.svg"} width={500} height={100} alt={"testimonials image"} className="max-md:w-[400px] max-sm:w-[360px] max-xs:w-[300px] max-xl:mt-6" />
                    <div className="flex flex-col max-xl:justify-center max-xl:items-center w-[30rem] max-xl:w-[32rem] max-sm:w-max mt-10">
                        <h4 className="max-md:text-sm max-xl:text-center text-primary font-semibold">TESTIMONIALS</h4>
                        <h1 className="text-4xl max-md:text-3xl max-sm:text-2xl max-xs:text-xl text-white max-xl:text-center max-sm:w-[20rem] font-bold mt-6">What our customers are saying</h1>
                        <p className="max-md:text-sm max-sm:text-xs text-white max-xl:text-center w-[27rem] max-sm:w-[23rem] max-xs:w-[20rem] mt-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suspendisse lectus erat curabitur at sit arcu luctus augue. Sceleriaque purus placerat scelerisque quis venenatis sollicitudin. Fermentum habitant proin iaculis tortor gravida vulputate sed justo.”</p>
                        <h2 className="text-white font-medium mt-6">Kathryn Murphy</h2>
                        <p className="text-[#888888] font-semibold">CEO of Stripe</p>
                        <div className="flex justify-end max-xl:justify-center gap-x-10 xl:w-[85%] mt-6">
                            <button className="hover:bg-[#3b632e] border-2 border-primary hover:border-[#888888] rounded-full cursor-pointer transition-colors duration-300 p-4 max-sm:p-3">
                                <Image src={"/left-arrow.svg"} width={15} height={15} alt={"Left Arrow icon"} />
                            </button>
                            <button className="hover:bg-[#3b632e] border-2 border-primary hover:border-[#888888] rounded-full cursor-pointer transition-colors duration-300 p-4 max-sm:p-3">
                                <Image src={"/right-arrow.svg"} width={15} height={15} alt={"Right Arrow icon"} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
