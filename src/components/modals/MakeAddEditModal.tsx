import React, { FormEvent, useEffect, useState } from 'react'
import store from '../../app/vehiceStore'
import useCRUD from '../../hooks/useCRUD'
import { Make } from '../../types'

type Props = {
    open:boolean,
    toogleOpen: (open:boolean) => void
    // type: 'edit' | 'add'
    make: Make | null 


}

function MakeAddEditModal({open, toogleOpen, make}: Props) {

    const [title, setTitle] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    const {addNewMake, updateMake} = useCRUD(store);

    useEffect(()=>{

        if(make){
            setTitle(make.name);
            setCountry(make.country)
        }
        else{
            setTitle("");
            setCountry("")
        }

    },[make, open])

    const handleSubmit = (e: FormEvent)=> {
        e.preventDefault();

        if(make){
            updateMake({id: make.id, name:title, country:country})
            toogleOpen(false);
            console.log("updated new make from modal")
        }
        else{
            addNewMake({id:'', name:title, country:country})
            toogleOpen(false);
            console.log("added new make from modal")
        }
    }


    const closeModal = ()=>{
        toogleOpen(false);
    }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full bg-gray-800 bg-opacity-50 ${open ? '' : 'hidden'}`}>
        <div className="relative w-full h-full">
            
            <div className="relative max-w-md md:h-auto bg-white rounded-lg shadow dark:bg-gray-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <button type="button" onClick={closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{!make  ? 'Add new vehicle make' : 'Edit vehicle make'}</h3>
                    <form className="space-y-6" action="#" onSubmit={(e : FormEvent)=>handleSubmit(e)}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Make title *</label>
                            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="makeName" id="makeName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="eg. Mercedes" required/>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country *</label>
                            <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} name="country" id="country" placeholder="eg. Germany" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{!make ? 'Add new vehicle make' : 'Edit vehicle make'}</button>

                    </form>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default MakeAddEditModal