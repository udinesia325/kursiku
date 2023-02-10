import Heading from "../components/Heading"
import kursi_orange from "../assets/kursi_orange.png"
import produk from "../data/produk"
import ProdukItem from "../components/ProdukItem"

const Produk = () => {
    return (
        <div className="container pt-20" id="Produk">
            <Heading>Produk</Heading>
            <div className="w-full mt-10 grid grid-cols-2 gap-x-2 gap-y-4 px-4">
                {produk.map((p, _i) => (
                    <ProdukItem key={_i} {...p} />
                ))}

            </div>
        </div>
    )
}

export default Produk
