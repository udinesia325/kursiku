const SwiperItem = ({ nama, pesan }) => {
    return (
        <div className="w-[90%] mx-auto pt-2 pb-5 px-4 min-h-[200px] flex flex-col justify-center gap-4 text-center">
            <img src="https://source.unsplash.com/random?people&200x200" alt="Person" width={80} className="rounded-full aspect-square mx-auto" />
            <h1 className="font-semibold text-xl text-center">{nama}</h1>
            <p className="text-slate-600 text-sm">{pesan}</p>
        </div>
    )
}

export default SwiperItem
