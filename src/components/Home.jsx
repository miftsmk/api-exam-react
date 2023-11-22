import { useState } from 'react'
import ExamModal from './ExamModal'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-full w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Daftar Ujian</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-full w-full leading-relaxed text-gray-500">Pilihlah ujian sesuai dengan jadwal yang telah ditentukan!</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">X [TKJ,RPL,BDP]</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Matematika</h2>
                <p className="leading-relaxed text-base">27 November 2023<br/>07.00 WIB (90 Menit)</p>
                <div className='flex justify-end mt-3'>
                  <button
                    type="button"
                    onClick={() => setOpenModal(!openModal)}
                    className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  >Mulai</button>
                  <ExamModal
                    openModal = {openModal}
                    setOpenModal = {setOpenModal} />
                </div>
                
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">X [TKJ,RPL,BDP]</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Pendidikan Pancasila dan Kewarganegaraan</h2>
                <p className="leading-relaxed text-base">27 November 2023<br/>07.00 WIB (90 Menit)</p>
                <div className='flex justify-end mt-3'>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    Mulai
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">X [TKJ,RPL,BDP]</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bahasa Jawa</h2>
                <p className="leading-relaxed text-base">27 November 2023<br/>07.00 WIB (90 Menit)</p>
                <div className='flex justify-end mt-3'>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    Mulai
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">X [TKJ,RPL,BDP]</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bahasa Inggris</h2>
                <p className="leading-relaxed text-base">27 November 2023<br/>07.00 WIB (90 Menit)</p>
                <div className='flex justify-end mt-3'>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    Mulai
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bahasa Inggris</h2>
                <p className="leading-relaxed text-base">27 November 2023<br/>07.00 WIB (90 Menit)</p>
                <div className='flex justify-end mt-3'>
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    Mulai
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Home