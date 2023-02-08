import Heading from "../components/Heading"
import LayananItem from "../components/LayananItem"
const Layanan = () => {
    return (
        <div className="container pt-20" id="Layanan">
            <Heading>Layanan</Heading>
            <div className="flex flex-col justify-start gap-y-6 md:flex-row md-gap-3 md:justify-center mt-16 pb-10 mx-3">
                <LayananItem icon="clock" header="Siap 24 X 7">Customer Service kami selalu sedia kapanpun untuk anda, konsultasi sekarang !</LayananItem>
                <LayananItem icon="truck" header="Gratis Ongkir">Proses pengiriman cepat dan gratis ke seluruh Indonesia, tunggu apa lagi pesan sekarang !</LayananItem>
                <LayananItem icon="cpu" header="Proses Cepat">Bagi kami, kepuasan pelanggan itu utama. Kami pastikan pesanan anda akan sampai tidak lebih dari 3 hari</LayananItem>
            </div>
        </div>
    )
}

export default Layanan
