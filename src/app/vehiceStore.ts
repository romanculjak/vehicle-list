import {makeAutoObservable, makeObservable, observable} from 'mobx'
import { updateModel } from '../api/restApi';
import { Make, Model } from '../types';


const addInitialVehicleMake = (dbMakes:Make[]) =>{
    console.log("added new make from store")

    return (
        [
            ...dbMakes
        ]
    )
}

const addVehicleMake = (makes:Make[], newMake:Make) =>{
    console.log("added new make from store")

    return (
        [
            ...makes,
            newMake
        ]
    )
}

const updateVehicleMake = (makes:Make[], updatedMake:Make) =>{
    console.log("updated new make from store")

    return (
        makes.map(m => m.id === updatedMake.id ? {...updatedMake} : {...m})
    )
}

const addInitialVehicleModels = (dbModels:Model[]) =>{
    console.log("added new make from store")

    return (
        [
            ...dbModels
        ]
    )
}

const addVehicleModel = (models:Model[], newModel:Model) =>{
    console.log("added new make from store")

    return (
        [
            ...models,
            newModel
        ]
    )
}

const updateVehicleModel = (models:Model[], updatedModel:Model) =>{
    console.log("updated new make from store")

    return (
        models.map(m => m.id === updatedModel.id ? {...updatedModel} : {...m})
    )
}

class VehicleStore {

    vehicleMakes: Make[];
    filteredVehicleMakes : Make[];
    vehicleModels: Model[];
    
    // vehicleMakesCount: number;
    // pageLimit: number;
    // currentPage: number;



    constructor(vehicleMakes: Make[], vehicleModels : Model[]){
        this.vehicleMakes = [];
        this.vehicleModels = [];
        this.filteredVehicleMakes = [];

        // this.vehicleMakesCount = 0;
        // this.pageLimit = 3;
        // this.currentPage = 1;


        makeAutoObservable(this)
    }

    addMake(newMake:Make){
        this.vehicleMakes = addVehicleMake(this.vehicleMakes,newMake)
        console.log('store makes: ' + this.vehicleMakes)
    }


    addInitialMake(allMakes:Make[]){
        this.vehicleMakes = addInitialVehicleMake(allMakes)
        console.log('store makes: ' + this.vehicleMakes)
    }

    addFilteredMakes(allMakes:Make[]){
        this.filteredVehicleMakes = allMakes;
        console.log('store makes: ' + this.vehicleMakes)
    }

    updateMake(updatedMake:Make){
        this.vehicleMakes = updateVehicleMake(this.vehicleMakes,updatedMake)
        console.log('store makes: ' + this.vehicleMakes)
    }

    addModel(newModel:Model){
        this.vehicleModels = addVehicleModel(this.vehicleModels,newModel)
        console.log('store makes: ' + this.vehicleMakes)
    }

    addInitialModels(allModels:Model[]){
        this.vehicleModels = addInitialVehicleModels(allModels)
        console.log('store makes: ' + this.vehicleMakes)
    }

    updateMOdel(updatedModel:Model){
        this.vehicleModels = updateVehicleModel(this.vehicleModels,updatedModel)
        console.log('store makes: ' + this.vehicleMakes)
    }
    
}

const store = new VehicleStore([], [])
export default store