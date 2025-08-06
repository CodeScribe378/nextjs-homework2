'use server'

import {postCars} from "@/services/api.service";
import {carValidator} from "@/validators/carValidator";


export const serviceCar= async(Data: FormData)=> {

    const brand = Data.get('brand') as string
    const price = Number (Data.get('price'))
    const year = Number (Data.get('year'))

    const {error, value} = carValidator.validate({brand, price, year})

    if(error){
        throw new Error (error.message)
    }
        await postCars(value)
}