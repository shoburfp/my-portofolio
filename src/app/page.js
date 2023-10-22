import Gambar from "@/components/Gambar"
import Navbar from "@/components/Navbar"


const Page = () => {
  return (

    <div className="text-black container relative mx-auto">
      <Navbar />
      <section className="pt-16 px-6">
        <div className="">
          <div className="flex flex-wrap lg:px-14 lg:mx-8">
            <div className="flex w-full self-center -px-15 lg:w-1/2">
              <div>
              <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua 🤚, saya
                <span className="block font-bold text-secondary text-3xl mt-3 mb-2 lg:text-5xl">
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
            {/* <About />
            <Projects/> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page