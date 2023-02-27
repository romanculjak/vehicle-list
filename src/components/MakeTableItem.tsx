import React from 'react'
import { Make } from '../types'

type Props = {
    make: Make
    edit: (make : Make) => void
}

const MakeTableItem = ({make, edit}: Props) => {
  return (
    <tr className="bg-blue-600 border-b border-blue-400">
        <th scope="row" className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100">
            {make.name}
        </th>
        <td className="px-6 py-4">
            {make.country}
        </td>
        <td className="px-6 py-4 bg-blue-500">
            <a href="#" className="font-medium text-white hover:underline" onClick={()=>edit(make)}>Edit</a>
        </td>
    </tr>
  )
}

export default MakeTableItem