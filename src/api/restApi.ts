import axios from "axios";
import { Make, Model } from "../types";

export const getAllMakes = async (page:number)=> {

    try{

        const response = await axios({
            method: 'get',
            url: `http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/makes/?limit=15&page=${page}`,
          });
    
        return response.data.docs;

    }catch{

    }
}

export const getFilteredMakes = async (country:string, page:number)=> {

    try{

        const response = await axios({
            method: 'get',
            url: `http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/makes/?country=${country}&limit=15&page=${page}`,
          });
    
        return response.data.docs;

    }catch{

    }
        
}

export const getAllModels = async ()=> {

    try{

        const response = await axios({
            method: 'get',
            url: 'http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/models',
          });
    
        return response.data.docs;

    }catch{

    }
        
}

export const createMake = async (make : Make)=> {

    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/createmake',
        data: {
            name:make.name,
            country:make.country
        }
      });

    return response.data.data.id;
}

export const createModel = async (model: Model)=> {

    const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/createmodel',
        data: {
            name:model.name,
            makeId:model.makeId
        }
      });

    return response.data.data.id;
}

export const updateMake = async (make: Make)=> {
     
    try{

        const response = await axios({
            method: 'put',
            url: 'http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/updatemake',
            data: {
                id:make.id,
                name:make.name,
                country:make.country
            }
        });

        return response.data;

    }catch{

    }
    
}

export const updateModel = async (model: Model)=> {
    
    try{

        const response = await axios({
            method: 'put',
            url: 'http://127.0.0.1:5001/mono-software-functions/us-central1/app/api/updatemodel',
            data: {
                id:model.id,
                makeId: model.makeId,
                name:model.name,
                
            }
          });
    
        return response.data;

    }catch{

    }
        
}