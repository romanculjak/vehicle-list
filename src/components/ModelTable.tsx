import { observer } from 'mobx-react'
import React, {useState} from 'react'
import store from '../app/vehiceStore'
import { Model } from '../types'
import ModelAddEditModal from './modals/ModelAddEditModal'
import ModelTableItem from './ModelTableItem'

type Props = {}

function ModelTable({}: Props) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<Model | null>(null)

    const editItem = (model: Model) => {

        setSelectedItem(model);
        setModalOpen(true);
        
    }


    const addNewModel = () => {

        setSelectedItem(null);
        setModalOpen(true)

    }
  return (
    
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <ModelAddEditModal open={modalOpen} toogleOpen={()=>setModalOpen(!modalOpen)} model={selectedItem}/>
            <div>
                <button type="button" onClick={addNewModel} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New Model</button>
            </div>
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-blue-500">
                            Model
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Make
                        </th>
                        <th scope="col" className="px-6 py-3 bg-blue-500">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.vehicleModels.map(model => {
                            return  <ModelTableItem edit={editItem} model={model}/>
                        })
                    }
                </tbody>
            </table>
        </div>

  )
}

export default observer(ModelTable)