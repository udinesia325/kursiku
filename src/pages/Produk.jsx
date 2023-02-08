import Heading from "../components/Heading"
import kursi_orange from "../assets/kursi_orange.png"
import produk from "../data/produk"
import ProdukItem from "../components/ProdukItem"

const Produk = () => {
    return (
        <div className="container pt-20" id="Produk">
            <Heading>Produk</Heading>
            <div className="w-full flex flex-col gap-y-9 md:flex-row md:gap-4 px-4 mb-36 mt-16">
                {produk.map((p, _i) => (
                    <ProdukItem key={_i} {...p} />
                ))}

            </div>
        </div>
    )
}

export default Produk
