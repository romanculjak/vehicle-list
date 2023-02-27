import { createMake, updateMake as updateMakeApi, getAllMakes as getAllMakesApi, createModel, getAllModels as getAllModelsApi, updateModel as updateModelApi, getFilteredMakes as getFilteredMakesApi } from "../api/restApi"
import VehicleStore from "../app/vehiceStore"
import { Make, Model } from "../types"


export default function useCRUD (store : typeof VehicleStore) {

    const updateMake = async (make : Make) =>{
        //update a through rest api
        try{
            await updateMakeApi(make);

        // //update the store
            store.updateMake(make)
            console.log("updated new make from usecrud hook")
        }
        catch{

        }

    }

    const addNewMake = async (make : Make) =>{


        const id = await createMake(make)

        store.addMake({...make,id})
        console.log("added new make from usecrud hook")
        
    }

    const updateModel =async (model : Model) =>{
                //update a through rest api
                try{
                    await updateModelApi(model);
        
                // //update the store
                    store.updateMOdel(model)
                    console.log("updated new make from usecrud hook")
                }
                catch{
        
                }
    }

    const addNewModel = async (model : Model) =>{
        const id = await createModel(model)

        store.addModel({...model,id})
        console.log("added new make from usecrud hook")
    }

    const getAllMakes =async (page: number)=> {
        const result = await getAllMakesApi(page);

        store.addInitialMake(result)

        return result
    }

    const getFilteredMakes = async (country: string, page: number)=> {
        const result = await getFilteredMakesApi(country,page);

        store.addFilteredMakes(result)

        return result
    }

    const getAllModels = async ()=> {
        const result = await getAllModelsApi();

        store.addInitialModels(result)

        return result
    }

    return {updateMake,updateModel, addNewMake, addNewModel, getAllMakes, getAllModels, getFilteredMakes}

}