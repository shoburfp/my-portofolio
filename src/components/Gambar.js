import Image from "next/image"
import foto from "@/app/foto.png"

const Gambar = () => {
    return (
        <div>

            <Image
                src={foto}
                width={300}
                height={0}
                alt="Foto saya"
                className="max-w-full mx-auto object-cover"
            />
        </div>
    )
}

export default Gambar