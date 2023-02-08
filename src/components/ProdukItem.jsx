const ProdukItem = ({ image, title, deskripsi, harga }) => {
    return (
        <div className="flex pl-0  pt-0 pb-2 gap-x-2 shadow-md rounded-md">
            <img src={image} alt={title} className="flex-none w-36" />
            <div className="flex-1 flex flex-col">
                <div>
                    <h1 className="font-semibold tracking-wide text-lg">{title}</h1>
                    <p className="text-sm">{deskripsi}</p>
                </div>
                <div>
                    <span className="inline-block mt-1 mb-2 pl-1 px-3 rounded bg-green-200 text-green-600 font-semibold">Rp. {Intl.NumberFormat().format(harga)}</span>
                    <br />
                    <button className="bg-white outline-primary outline p-2 rounded active:bg-secondary-light">
                        <i data-feather="shopping-cart"></i>
                    </button>
                    <button className="bg-primary p-2 ml-2 rounded">
                        <i data-feather="dollar-sign"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ProdukItem
