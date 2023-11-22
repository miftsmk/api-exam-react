import Const from '../Const'

const FinishExamPage = () => {

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src={Const.LOGO_IMG} alt="logo" />
              {Const.SCHOOL}    
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                      Ujian telah berhasil diselesaikan
                  </h1>
                  <h2 className='text-center'>Nilai Anda :</h2>
                  <p style={{fontSize: "90px",fontWeight: "600"}} className='text-center exam-score'>100</p>
              </div>
              <div className='m-3 flex justify-between'>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Ke Halaman Utama
                </button>
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Sign Out
                </button>
              </div>
          </div>
      </div>
    </section>
  )
}

export default FinishExamPage