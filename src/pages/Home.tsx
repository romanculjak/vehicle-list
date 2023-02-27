import React, { useEffect, useState } from 'react'
import {observer} from 'mobx-react'
import VehicleStore from '../app/vehiceStore'
import MakeTable from '../components/MakeTable'
import ModelTable from '../components/ModelTable'
import AddModal from '../components/modals/MakeAddEditModal'
import store from '../app/vehiceStore'
import useCRUD from '../hooks/useCRUD'
import Tab from '../components/Tab'

type Props = {}



function Home({}: Props) {

  const [screenSelected, setScreenSelected] = useState<'make' | 'model'>("make")

  const {getAllMakes, getAllModels} = useCRUD(store)

  useEffect(()=>{
    getAllMakes(1);
    getAllModels();
  },[])

  return (
    <div className='relative'>
      <div className='container'>

        <Tab type={screenSelected} setType={setScreenSelected} />
        {
          screenSelected === 'make' ?
            <MakeTable/>
            :
            <ModelTable/>
        }
      </div>
    </div>
  )
}


export default observer(Home)