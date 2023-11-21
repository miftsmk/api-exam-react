import React from 'react'
import Numbers from './Numbers'

const Exam = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
            <div className="flex justify-between m-4 mb-5">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Soal No. 1</h1>
              <button className="mx-2 text-white bg-primary-700 border-0 py-2 px-8 focus:outline-none hover:bg-primary-900 rounded text-lg">Pilih Nomer</button>
            </div>  
              <div className="h-1 w-full bg-primary-500 rounded"></div>
            </div>
            <img className="rounded object-cover object-center mb-6 mt-3" src="https://dummyimage.com/720x400" alt="content"/>
            <p className="lg:w-full w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pilihan Jawaban</h1>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-full md:w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="rounded object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-full md:w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-full md:w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-full md:w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-4 mb-10">
            <button className="mx-2 mt-2 text-white bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg">Sebelumnya</button>
            
            <button className="mx-2 mt-2 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Ragu-ragu</button>
            <button className="mx-2 mt-2 text-white bg-primary-500 border-0 py-2 px-8 focus:outline-class=strokeLinecapnone hover:bg-primary-600 rounded text-lg">Selanjutnya</button>
        </div>
      </section>
      <Numbers />
    </div>
    
  )
}

export default Exam