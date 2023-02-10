import "feather-icons/dist/feather"
import { useEffect } from "react"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import feather from "feather-icons"
import Layanan from "./pages/Layanan"
import Produk from "./pages/Produk"
import Testimoni from "./pages/Testimoni"
function App() {
  useEffect(() => {
    feather.replace()
  }, [])
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Layanan />
      <Produk />
      <Testimoni />
    </div>
  )
}

export default App
