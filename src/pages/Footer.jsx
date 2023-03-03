import ContactForm from "../components/ContactForm"

const Footer = () => {
    return (
        <div className="w-full px-2 pb-10 pt-6 min-h-[400px] bg-gradient-to-b from-primary to-primary-deep">
            <ContactForm />
            <div className="container mt-10">
                <div className="flex columns-2 justify-evenly">
                    <ul className="text-white tracking-wide">
                        <li className="font-semibold">Lainnya</li>
                        <li>Kontak Kami</li>
                        <li>Kebijakan & Privasi</li>
                        <li>Syarat & Ketentuan</li>
                        <li>Pembayaran </li>
                    </ul>
                    <ul className="text-white tracking-wide">
                        <li className="font-semibold">Dari Kami</li>
                        <li>Blog</li>
                        <li>Bantuan</li>
                        <li>Media Sosial</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer
