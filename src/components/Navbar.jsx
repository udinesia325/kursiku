import { useState } from "react"
import NavItemMobile, { NavItem } from "./NavItemMobile"
import navChild from "../data/navChild"

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-[rgba(255,255,255,0.8)] px-3 py-4 z-20">
            <div className="container flex justify-between items-center">
                <a href="#" className="font-bold text-2xl">Kursi <span className="text-secondary">Ku</span></a>
                {/*khsusus untuk desktop*/}
                <ul className="hidden md:flex justify-between gap-x-4 mr-4">
                    {navChild.map((nav, _i) => (
                        <li><NavItem key={_i} text={nav} /></li>
                    ))}
                </ul>
                <div onClick={() => setShow(true)} className=" mr-4 md:hidden">
                    <i data-feather="menu"></i>
                </div>
            </div>

            {/*khsusus untuk mobile*/}
            <NavItemMobile show={show} setShow={setShow} />
        </div>
    )
}

export default Navbar
