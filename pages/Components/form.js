import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/router'

export  default  function form(){
const [page,setPage]=useState([])
const [datas,setDatas]=useState('')

const fetchPage=async()=>{
	const response=await fetch('')
	const data=await response.json()
	setPage(data)
}
const submitDatas=async()=>{
	const response= await fetch('',{
		method : 'POST',
	body:JSON.stringify({}),
	headers:{
		'Content-Type':'application/json',
	},
	})
	const data=await response.json()
	console.log(data)
	
}
return(
	<form >
        
	<div className="max-w-md w-full mx-auto shadow rounded-lg p-7 space-y-6">
				<div className="flex flex-col">
					<label className="text-sm font-bold text-gray-600 mb-1">
						
						Name
					</label>
					<input
							className=" border-2 rounded-lg px-3 py-1 hover:border-indigo-600"
							type="text"
							name="name"
							id="name"
                            value={datas}
                            onChange={(e)=> setDatas(e.target.value)}
							placeholder="Enter Your Name"
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-sm font-bold text-gray-600 mb-1">
						
							Username
						</label>
						<input
							className=" border-2 rounded-lg px-3 py-1 hover:border-indigo-600"
							type="text"
							name="username"
							id="username"
                            value={datas}
                            onChange={(e)=> setDatas(e.target.value)}
							placeholder="Enter Your Username"
						/>
						</div>
                    <button className="w-28 bg-indigo-600 text-white rounded-md p-2  hover:bg-blue-700" type="submit" onClick={submitDatas}>Add Users
                     </button>
					 {page.map((datas)=>{
						return(
							<div ></div>
						)
					 }
					 )}
		</div>
	</form>
    
)

}
