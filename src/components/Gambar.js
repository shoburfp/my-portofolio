import Image from "next/image"
import foto from "@/app/foto.png"

const Gambar = () => {
    return (
        <Image
            src={foto}
            width={300}
            height={0}
            alt="Foto saya"
            className="max-w-full mx-auto object-cover"
        />
    )
}

export default Gambar