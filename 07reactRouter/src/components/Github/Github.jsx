import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    let data = useLoaderData()
  return (
    <div className='bg-gray-800 flex  justify-center pb-5'>
      <div className=' flex flex-col items-center'>
        <div className='flex gap-12'>
            <h1 className='text-5xl text-white p-5 '>User: {data.followers}</h1>
            <h1 className='text-5xl text-white p-5 '>User: {data.login}</h1>
         </div>
      <img src={data.avatar_url} alt="" width={300} />
      </div>
    </div>
  )
}

export default Github

export const getGithubData = async () => {
    const response = await fetch('https://api.github.com/users/SumitAgDec')
    return response.json()

}