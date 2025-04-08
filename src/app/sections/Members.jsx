import Image from 'next/image'
import Link from 'next/link'


const Members = () => {
    return (
        <section className="flex bg-black h-max">
            <div className="max-w-5xl w-full mx-auto mt-14">
                <div className="flex flex-col justify-center items-center">
                    <h4 className="text-lg text-center text-primary font-semibold tracking-wider">OUR MEMBERS</h4>
                    <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-center text-white font-bold mt-8">Get to know amazing people</h1>
                    <p className="max-sm:text-sm text-center text-white font-medium w-[48rem] max-xl:w-[42rem] max-lg:w-[36rem] max-md:w-[32rem] max-sm:w-[22rem] max-xs:w-[20rem] mt-8">Our mission is to be the global standard for modern crypto issuing, empowering builders to bring the most innovative products to the world.</p>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-16 gap-y-10 mt-12">
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-1.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Tom Henks</h2>
                            <p className="text-[#888888] font-bold mt-2">CEO of Crypto 128</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-2.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Brooklyn Simmons</h2>
                            <p className="text-[#888888] font-bold mt-2">Office Director</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-3.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Robert Fox</h2>
                            <p className="text-[#888888] font-bold mt-2">Sales Manager</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-4.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Albert Flores</h2>
                            <p className="text-[#888888] font-bold mt-2">Blockchain Developer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-5.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Annette Black</h2>
                            <p className="text-[#888888] font-bold mt-2">UI/UX Designer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={"/t-6.png"} width={200} height={100} alt={"person image"} />
                            <h2 className="text-white font-medium mt-4">Courtney Henry</h2>
                            <p className="text-[#888888] font-bold mt-2">Software Engineer</p>
                        </div>
                    </div>

                    <div className="flex max-md:flex-col w-max items-center md:justify-between mt-24 max-lg:mt-16 max-sm:mt-12 md:px-4">
                        <div className="flex flex-col max-md:items-center">
                            <h1 className="text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-white max-md:text-center font-bold max-xl:w-[32rem] max-lg:w-[22rem] max-md:w-[18rem] max-sm:w-[16rem] leading-16 max-xl:leading-12 max-md:leading-10 max-sm:leading-6">Completely leverage other products</h1>
                            <p className="max-sm:text-sm text-white font-medium max-md:text-center leading-6 w-[30rem] max-xl:w-[26rem] max-lg:w-[22rem] max-md:w-[18rem] mt-8 max-md:mt-4">Dramatically reintermediate effective applications after high-payoff core competence.Authoritatively optimize collaborative benefits</p>
                            <Link href={"/"} className="flex justify-center place-items-center w-36 h-12 text-center lg:text-lg text-white hover:text-black hover:bg-primary transition-colors duration-300 border-[3px] border-primary rounded-4xl mt-8">Get Started</Link>
                        </div>
                        <Image src={"/milestone.svg"} width={450} height={100} alt={"milestone image"} className="max-xl:w-[380px] max-sm:w-[300px] max-md:mt-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Members
