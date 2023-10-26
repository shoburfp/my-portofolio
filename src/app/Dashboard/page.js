import Gambar from "@/components/Gambar"
import Image from "next/image"
import sisrekjur from "@/app/Projects/sisrekjur.png"


const Dashboard = () => {
    return (
        <>

            <section id="Home" className="bg-white pt-16 pb-36 md:pb-40 mx-auto max-w-3xl px-6 lg:px-4 xl:max-w-5xl ">
                <div className="flex flex-wrap">
                    <div className="flex w-full self-center -px-15 lg:w-1/2">
                        <div>
                            <h1 className="text-base font-semibold text-primary md:text-xl">Hi my name is,
                                <span className="block font-bold text-secondary text-3xl mt-1 mb-2 lg:text-4xl">
                                    M. Syabur Feryson Pilat
                                </span></h1>
                            <h2 className="font-medium text-slate-700 text-lg mb-2">Front End Web Developement</h2>
                            <p className="font-medium text-slate-400 mb-5 leading-relaxed">Less Talk, <span className="text-secondary font-semibold">Do More!</span></p>
                            <a className="link font-bold" href="https://wa.me/6289670450436" target="_blank">Contact Me</a>
                        </div>

                    </div>

                    <div className="w-full self-end lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <Gambar />
                        </div>
                    </div>
                </div>
            </section>
            {/* Akhir Section Home */}

            {/* Awal Section Projects */}
            <section id="Projects" className="bg-white pt-20 sm:mt-6 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex flex-wrap">
                    <div className="w-full mb-4 lg:mb-10 px-4">
                        <h1 className="text-center font-bold  text-secondary text-2xl lg:text-4xl uppercase font-sans">Projects</h1>
                        <hr className="mt-4 border" />
                    </div>
                </div>
                <div className="container  mb-8 px-0 lg:mx-auto">
                    <div className="border rounded-xl shadow-lg lg:px-8 px-2">
                        <div className="lg:flex  mx-auto mb-4">
                            <Image
                                src={sisrekjur}
                                width={450}
                                height={0}
                                alt="sisrekjur"
                                className="max-w-full max-h-full object-contain mt-6"
                            />

                            <div className="px-4 lg:px-20">
                                <h1 className="font-bold text-xl mt-8 mb-4 uppercase">Sisrekjur</h1>
                                <p className="mb-6 text-justify">Aplikasi sistem rekomendasi jurusan kuliah bagi calon mahasiswa
                                    dengan metode <i><b>Fuzzy Tsukamoto</b></i> berdasarkan nilai raport 5 semester.</p>
                                <div className="flex items-center flex-wrap gap-2 lg:gap-4 mt-2 mb-10 lg:mb-20">
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
                <div className="flex justify-between">
                    <div></div>
                    <div>
                        <a href="/Projects" className="font-bold hover:text-pink-600 px-2">View all Project</a>
                    </div>
                </div>

            </section>
            {/* Akhir Section Projects */}
        </>
    )
}

export default Dashboard