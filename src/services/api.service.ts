import axios from "axios";
import {ICars} from "@/models/ICars/ICars";




const AxiosInstant = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-type': 'application/json'}
})

export const getCars =async(): Promise<ICars[]>=>{
    const {data} = await AxiosInstant.get('/cars')
    return data
}


type Props={ brand: string, price: number, year: number}

export const postCars =async({brand, price, year}: Props)=>{
      await AxiosInstant.post('/cars', {brand, price, year})
}