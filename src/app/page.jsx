'use client'
import { Key } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
// npm i axios

export default function Home() {
  const [data,setdata] = useState([])

const loaddata = async()=>{
let loadingdata = await axios.get("https://api.github.com/users/naveed-rana/followers")
setdata(loadingdata.data)
console.log("response", loadingdata.data)
} 

const userdata = async(i)=>{
  let loadingdata = await axios.get(i)
  setdata(loadingdata.data)
  console.log("response", loadingdata.data)
  console.log(data)
  } 

const deleteHand = (Follow)=>{
  let restfollwers = data.filter((student)=>{
    if (student.id !== Follow){
      return student
    }
  })
  setdata(restfollwers)
}
  return (
   <div>
        <div className='mt-20 max-w-full py-12 px-4 '>
          <div className=' max-w-7xl  mx-auto bg-slate-400  rounded-t-lg border-2 border-slate-700' >
            <div className='flex justify-between'>
            <div className='flex items-center'>
            <div className='w-16 h-16 px-2 py-2  '>
                <Image width={1000} height={1000} src='/user.jpeg' className='w-[100%] h-[100%] object-cover rounded-full flex-wrap' /> 
              </div>
                <p className='font-semibold'>Farhan Shafqut</p>
                <div>
            </div>
                </div>
              <button onClick={loaddata} className='bg-white rounded-2xl h-10 px-2 mt-3 mx-4 hover:bg-slate-500 active:bg-white duration-100 ease-in'>Get Followers</button>
            </div>
              
          </div>
          <div className=' max-w-7xl   mx-auto bg-gray-400 rounded-b-lg border-2 border-slate-700' >
             {data.map((item,i)=>{
              return(
               <div key={i} className='grid max-w-7xl grid-cols-2 sm:grid-cols-4 space-x-4 space-y-4 border border-b-2 border-blue-800'>
                <p className='hidden'></p>
                  <div>
                <h3>UserName</h3>
                <p>{item.login}</p>
                </div>
                <div>
                <h3>Id</h3>
                <p>{item.id}</p>
                </div>
                <div className=''>
                <button className='bg-blue-400 rounded-full w-32 py-2 hover:bg-blue-600' onClick={()=>{deleteHand(item.id)}}>Delete</button>
              </div>
                <div className=''>
                <button onClick={()=>{userdata(item.followers_url)}} className='bg-white rounded-2xl h-10 py-2  hover:bg-slate-500 active:bg-white duration-100 ease-in'>Get Followers</button>
                </div>
                </div>
               
                )
              })}
              </div>
        </div>
   </div>
  )
}
