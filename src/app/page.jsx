import Image from 'next/image'


export default function Home() {
  return (
   <div>
        <div className='mt-20 max-w-full py-12 px-4 '>
          <div className=' max-w-7xl  mx-auto bg-slate-400  rounded-lg border-2 border-slate-700' >
            <div className='flex justify-between'>
            <div className='flex items-center'>
            <div className='w-16 h-16 px-2 py-2  '>
                <Image width={1000} height={1000} src='/user.jpeg' className='w-[100%] h-[100%] object-cover rounded-full flex-wrap' /> 
              </div>
                <p className='font-semibold'>Farhan Shafqut</p>
                <div>
            </div>
                </div>
              <button className='bg-white rounded-2xl h-10 px-2 mt-3 mx-4 hover:bg-slate-500 active:bg-white duration-100 ease-in'>Get Followers</button>
            </div>
              {/* <div className='h-1 max-w-7xl bg-slate-900 my-2'></div> */}
              
          </div>
        </div>
   </div>
  )
}
