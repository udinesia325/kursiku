const LayananItem = ({ icon, header, children }) => {
    return (
        <div className="flex flex-col gap-y-3 justify-center items-center px-4 py-3 shadow-md  rounded-lg">
            <i data-feather={icon} className="w-10 h-10 feather-secondary"></i>
            <h3 className="font-semibold">{header}</h3>
            <p className="text-center text-slate-700">{children}</p>
        </div>
    )
}

export default LayananItem
