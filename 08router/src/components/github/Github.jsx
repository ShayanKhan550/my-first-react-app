import { React, useState, useEffect } from 'react'

export default function Github() {
    const [data, setData] = useState(null)
    fetch("https://api.github.com/users/Shayankhan550")
        .then(res => res.json())
        .then(data => setData(data))
    if (!data) return <p>Loading .......</p>
    return (
        <>
            <div className='bg-gray-700 p-5 text-white flex  gap-4 items-center'>
                <img src={data.avatar_url} alt="github img" width={200} />
                <div className="">
                    <h3>your Followes are : <b>{data.followers}</b></h3>
                    <p>Total repos : {data.public_repos} </p>
                </div>
            </div>
        </>
    )
}


// import { useEffect, useState } from 'react'
// export default function Github() {
//     const [data , setData] = useState([])
//     useEffect(()=>{
//         fetch("https://api.github.com/users/Shayankhan550")
//         .then(res => res.json())
//         .then(data =>{
//             setData(data)
//         console.log(data)
//         })
//     },[])
//     if(!data) return <div>Loading...</div>
//   return (
//     <div>
//         <div className="flex">
//             <img src={data.avatar_url} alt="github profile img" width={200} />
//             <h4>Github Followes: {data.following} </h4>
//         </div>
//     </div>
//   )
// }
