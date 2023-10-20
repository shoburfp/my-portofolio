import Image from "next/image"
import foto from "@/components/Projects/cuyanimelist.png"

const Projects = () => {
    return (
        <section className="pt-36 pb-32 flex">
            <div className="container items-center">
                <div className="flex flex-wrap">
                    <div className="w-full mb-10">
                            <h1 className="lg:text-center font-bold text-3xl lg:text-5xl">Projects</h1>
                    </div>
                    
                </div>
                <div className="flex flex-wrap w-full">

                    
                    <Image
                        src={foto}
                        width={450}
                        height={600}
                        alt="Foto saya"
                        className="max-w-full h-full object-cover"
                    />
                   
                    <div className="flex w-full lg:w-1/2">
                    <div className="w-full col-span-2 lg:col-span-1 lg:px-20">
                    <h1 className="font-bold text-xl mt-8 mb-4">CuyAnimeList</h1>
                    <p className="mb-6">Website berisi list anime yang menggunakan API dari Jiken,
                            memakai Next JS sebagai web framework dan Tailwind CSS sebagai UI Framework</p>
                        <div className="flex items-center flex-wrap gap-8 mt-2 mb-10 lg:mb-20">
                            <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">React</div>
                            <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Node JS</div>
                            <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Tailwind Css</div>
                        </div>
                        <a href="#" className="text-base text-secondary font-bold hover:text-pink-600">Kunjungi Halaman👉</a>
                    </div>
                    
                    </div>
                </div>
            </div>
                
            
        </section>
    )
}

export default Projects