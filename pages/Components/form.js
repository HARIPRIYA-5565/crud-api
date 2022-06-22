import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/router'

export  default  function form(props){

return(
    <form>

		<div>
		<label>
			name
		</label>
		</div>
    {/* <div className="max-w-md w-full mx-auto shadow rounded-lg p-7 space-y-6">
    <div className="flex flex-col">
						<label className="text-sm font-bold text-gray-600 mb-1">
							
							Name
						</label>
						<input
							className=" border-2 rounded-lg px-3 py-1 hover:border-indigo-600"
							type="text"
							name="name"
							id="name"
                            
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
                           
							placeholder="Enter Your Username"
						/>
					</div>
                    <button className="w-28 bg-indigo-600 text-white rounded-md p-2  hover:bg-blue-700" type="submit" >Add Users
                     </button>
                    </div> */}
    </form>
)

}
