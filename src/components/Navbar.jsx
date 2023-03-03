import { useState } from "react"
import NavItemMobile from "./NavItemMobile"

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[rgba(255,255,255,0.8)] px-3 py-4 z-20">
            <div className="container flex justify-between items-center">
                <a href="#" className="font-bold text-2xl">Kursi <span className="text-secondary">Ku</span></a>
                <div onClick={() => setShow(true)} className=" mr-4 md:hidden">
                    <i data-feather="menu"></i>
                </div>
            </div>
            <NavItemMobile show={show} setShow={setShow} />
        </div>
    )
}

export default Navbar
