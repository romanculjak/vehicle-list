import React from 'react'
import store from '../app/vehiceStore'
import { Model } from '../types'

type Props = {
    model: Model
    edit: (model : Model) => void
}

function ModelTableItem({model, edit}: Props) {


    const makeName = store.vehicleMakes.find((make) => make.id === model.makeId)

  return (
    <tr className="bg-blue-600 border-b border-blue-400">
        <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
            {model.name}
        </th>
        <td className="px-6 py-4">
            {makeName?.name}
        </td>

        <td className="flex gap-2 px-6 py-4 bg-blue-500">
            <a href="#" className="font-medium text-white hover:underline" onClick={()=>edit(model)}>Edit</a>
            {/* <a href="#" className="font-medium text-white hover:underline">Delete</a> */}

        </td>
    </tr>
  )
}

export default ModelTableItem