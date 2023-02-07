import hero from "../assets/hero_image.png"
const Hero = () => {
    return (
        <div className="container px-2 flex flex-col md:flex-row gap-y-12 md:mt-10">
            <div className="flex-auto md:ml-10">
                <h1 className="font-black text-4xl text-4xl md:text-2xl mt-10 tracking-wide leading-snug ">Kursi dengan desain <span className="text-secondary">elegan</span> dan kenyamanan <span className="text-secondary">maksimal</span></h1>
                <button type="button" className="py-3 px-6 bg-secondary font-semibold rounded-sm mt-6 text-slate-50">Pesan Sekarang</button>
            </div>
            <div className="flex-auto flex justify-center items-center md:pt-6">
                <img src={hero} className="w-full md:w-1/2" />
            </div>
        </div>
    )
}

export default Hero
