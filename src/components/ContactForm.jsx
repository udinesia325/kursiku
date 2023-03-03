const ContactForm = () => {
    return (
        <div className="container">
            <form className="mx-auto flex flex-col justify-center gap-y-3 w-full max-w-lg ">
                <input type="email" name="email" placeholder="Email" className="outline-transparent py-2 px-4" />
                <textarea rows="4" placeholder="Pesan ..." className="outline-transparent py-2 px-4"></textarea>
                <button type="button" className="mx-auto py-3 px-16 w-max bg-secondary font-semibold rounded-sm mt-3 text-slate-50 hover:bg-secondary-light">Kirim</button>
            </form>
        </div>
    )
}

export default ContactForm
