import React, { useState } from 'react'
import store from '../app/vehiceStore'
import { Make } from '../types'
import MakeTableItem from './MakeTableItem'
import MakeAddEditModal from './modals/MakeAddEditModal'
import {observer} from 'mobx-react'
import useCRUD from '../hooks/useCRUD'


type Props = {}

const MakeTable = (props: Props) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Make | null>(null)
    const [countryFilter, setCountryFilter] = useState<string>("")
    const [page, setPage] = useState<number>(1)


    const {getAllMakes,getFilteredMakes } = useCRUD(store)

    const editItem = (make: Make) => {

        setSelectedItem(make);
        setModalOpen(true);
        
    }


    const addNewMake = () => {

        setSelectedItem(null);
        setModalOpen(true)

    }

    //not used yet
    const handlePagination = (direction : -1 | 1) => {
        
        if(direction>0){
            
            setPage(page => page+1)
        }
        else if(direction<0){
            
            setPage(page => page-1)
        }

    }

    const handleFilterSelect = (e : React.ChangeEvent<HTMLSelectElement>) => {

        setPage(1)

        if(parseInt(e.target.value) === 0){
            setCountryFilter("");
            // getAllMakes();
            console.log('handle filter select all')

        }
        else{
            setCountryFilter(e.target.value);
            getFilteredMakes(e.target.value,page)
            console.log('handle filter select filtered')
        }
    }


  return (

<div className="relative overflow-x-auto">
    <MakeAddEditModal open={modalOpen} toogleOpen={()=>setModalOpen(!modalOpen)} make={selectedItem}/>
    <div className='flex gap-2 justify-start items-center my-2'>
        <button type="button" onClick={addNewMake} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Make</button>
        <select id="countries" onChange={(e)=>{handleFilterSelect(e)}} className=" max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value={0}>{"all"}</option>
            {store.vehicleMakes.map((make)=>{
                return <option value={make.country}>{make.country}</option>
            }
            )}
        </select>
    </div>
    <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 bg-blue-400 shadow-md sm:rounded-sm">
        <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Make
                </th>
                <th scope="col" className="px-6 py-3">
                    Country
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-500">
                    Action
                </th>
            </tr>
        </thead>
        {countryFilter.length>0?        
        <tbody>
                {
                    store.filteredVehicleMakes.map(make => {
                        return  <MakeTableItem edit={editItem} make={make}/>
                    })
                }
            </tbody>:
            <tbody>
                {
                    store.vehicleMakes.map(make => {
                        return  <MakeTableItem edit={editItem} make={make}/>
                    })
                }
        </tbody>}
    </table>
    <div className='py-4 flex justify-center items-center'>
                
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Previous
        </a>
        <div className='px-2'>{page}</div>
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>

    </div>
</div>

  )
}

export default observer(MakeTable)