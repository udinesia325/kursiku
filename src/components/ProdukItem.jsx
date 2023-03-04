const ProdukItem = ({ image, title, deskripsi, harga }) => {
    return (
        <div className="flex flex-col items-center  px-2  pt-0 pb-2 gap-x-2  border rounded-md">
            <img src={image} alt={title} className="flex-none w-3/4 max-w-sm" />
            <div className="flex-1 flex flex-col">
                <div className="md:text-center">
                    <h1 className="font-semibold tracking-wide text-lg">{title}</h1>
                    <p className="inline-block pl-1 px-3 text-slate-700">Rp. {Intl.NumberFormat().format(harga)}</p>
                    <hr className="w-10 mx-auto mb-6" />
                    <p className="text-xs text-slate-600">{deskripsi}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProdukItem
