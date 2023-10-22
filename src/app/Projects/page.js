import Image from "next/image"
import cuyanimelist from "@/app/Projects/cuyanimelist.png"
import sisrekjur from "@/app/Projects/sisrekjur.png"
import Navbar from "@/components/Navbar"

const Projects = () => {
    return (
        <>
            <Navbar />
            <section className="pt-16 lg:px-28">
                <div className="flex flex-wrap">
                    <div className="w-full mb-4 lg:mb-10 px-4">
                        <h1 className="lg:text-center font-bold text-2xl lg:text-4xl uppercase font-sans">Projects</h1>
                    </div>
                </div>

                {/* <div className="container flex justify-center  border mb-6">
                        <Image
                            src={cuyanimelist}
                            width={450}
                            height={0}
                            className="max-w-full max-h-full object-cover"
                        />

                        <div className=" w-full lg:w-1/2 border">
                            <div className="w-full col-span-2 lg:col-span-1 lg:px-20">
                                <h1 className="font-bold text-xl mt-8 mb-4 uppercase">CuyAnimeList</h1>
                                <p className="mb-6">Website berisi list anime yang menggunakan API dari Jiken,
                                    memakai Next JS sebagai web framework dan Tailwind CSS sebagai UI Framework</p>
                                <div className="flex items-center flex-wrap gap-8 mt-2 mb-10 lg:mb-20">
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">React</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Node JS</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Tailwind Css</div>
                                </div>
                                <div className="flex gap-14">
                                <a href="https://github.com/shoburfp/cuyanimelist" target="_blank" className="text-base text-secondary font-bold hover:text-pink-600">Github</a>
                                <a href="https://scnimelist.vercel.app/" target="_blank" className="text-base text-secondary font-bold hover:text-pink-600">Live Preview👉</a>
                                </div>
                            </div>
                        </div>
                </div> */}

               

                <div className="container  mb-8 px-4 lg:px-8 lg:mx-auto">
                    <div className="border shadow-xl px-8">
                        <div className="lg:flex relative mb-4">
                            <Image
                                src={sisrekjur}
                                width={450}
                                height={0}
                                className="max-w-full max-h-full object-cover mt-6"
                            />
                            <div className="px-4 lg:px-20">
                                <h1 className="font-bold text-xl mt-8 mb-4 uppercase">Sisrekjur</h1>
                                <p className="mb-6">Aplikasi sistem rekomendasi jurusan kuliah bagi calon mahasiswa
                                    dengan metode <i><b>Fuzzy Tsukamoto</b></i> berdasarkan nilai raport 5 semester.</p>
                                <div className="flex items-center flex-wrap gap-2 lg:gap-8 mt-2 mb-10 lg:mb-20">
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Code Igniter</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Javascript</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Php</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Html</div>
                                </div>
                                <div className="flex gap-14 mb-6">
                                    <a href="https://github.com/shoburfp/sisrekjur" target="_blank" className="text-base text-secondary font-bold hover:text-pink-600">Github</a>
                                </div>
                            </div>
                        </div>
                </div>
                </div>

                <div className="container   mb-8 px-4 lg:px-8 lg:mx-auto">
                    <div className="border shadow-xl px-8">
                        <div className="lg:flex relative">
                            <div className="px-4 lg:px-20">
                                <h1 className="font-bold text-xl mt-8 mb-4 uppercase">cuyanimelist</h1>
                                <p className="mb-6">Website berisi list anime yang menggunakan API dari Jiken,
                                    memakai Next JS sebagai web framework dan Tailwind CSS sebagai UI Framework.</p>
                                <div className="flex items-center flex-wrap gap-2 lg:gap-8 mt-2 mb-10 lg:mb-20">
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">React</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Node JS</div>
                                    <div class="bg-[#E5E7EB] dark:bg-[#374151] rounded-[12px] py-[4px] px-[20px] w-min whitespace-nowrap">Tailwind Css</div>
                                </div>
                                <div className="flex gap-14 mb-6">
                                    <a href="https://github.com/shoburfp/cuyanimelist" target="_blank" className="text-base text-secondary font-bold hover:text-pink-600">Github</a>
                                    <a href="https://scnimelist.vercel.app/" target="_blank" className="text-base text-secondary font-bold hover:text-pink-600">Live Preview👉</a>
                                </div>
                            </div>
                            <Image
                                src={cuyanimelist}
                                width={450}
                                height={0}
                                className="max-w-full max-h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

               
              
            </section>
        </>
    )
}

export default Projects