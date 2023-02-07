import { useState } from "react"
import NavItemMobile from "./NavItemMobile"

const Navbar = () => {
    const [show, setShow] = useState(false)
    console.log(show)
    return (
        <div className="sticky top-0 left-0 right-0 bg-primary px-3 py-4  md:py-6">
            <div className="container flex justify-between items-center">
                <h1 className="font-bold text-2xl">Kursi <span className="text-secondary">Ku</span></h1>
                <div onClick={() => setShow(true)} className=" mr-4 md:hidden">
                    <i data-feather="menu"></i>
                </div>
            </div>
            <NavItemMobile show={show} setShow={setShow} />
        </div>
    )
}

export default Navbar
