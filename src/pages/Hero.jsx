import hero from "../assets/hero_image.png"
const Hero = () => {
    return (
        <div className="container flex flex-col md:flex-row gap-y-12 mt-14 pt-10 md:pt-4 px-3 md:px-0">
            <div className="flex-1 flex flex-col justify-start items-start md:justify-center md:items-center">
                <h1 className="font-black text-4xl md:text-center md:leading-snug tracking-wide leading-snug ">Kursi dengan desain <span className="text-primary">elegan</span> <br /> dan kenyamanan <span className="text-primary">maksimal</span></h1>
                <button type="button" className="py-3 px-6 bg-secondary font-semibold rounded-sm mt-6 text-slate-50 hover:bg-secondary-light">Pesan Sekarang</button>
            </div>
            <div className="flex-1 flex justify-center items-center md:pt-6">
                <img src={hero} className="w-[80%]" />
            </div>
        </div>
    )
}

export default Hero
