import navChild from "../data/navChild"
const NavItemMobile = ({ show, setShow }) => {
    return (
        <div className={`absolute flex flex-col gap-2 md:hidden top-3 ${show ? "right-3" : "-right-1/2"}  pt-6 pb-3 px-6 bg-white shadow w-[180px] rounded transition-all `}>

            {navChild.map((nav, _i) => (
                <NavItem key={_i} text={nav} />
            ))}
            <div>

                <div className="absolute top-2 right-1" onClick={() => setShow(false)}>
                    <i data-feather="x" className="relative"></i>
                </div>

            </div>
        </div>
    )
}
const NavItem = ({ text }) => {
    return <a href={`#${text}`} className="tracking-wide">{text}</a>
}
export default NavItemMobile
