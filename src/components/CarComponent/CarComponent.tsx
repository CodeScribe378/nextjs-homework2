
import {ICars} from "@/models/ICars/ICars";
import {FC} from "react";

type Props={
    car: ICars
}
const CarComponent: FC<Props> =({car})=>{
    return(
        <div>
            <h2>brand: {car.brand}</h2>
            <p>year: {car.year}</p>
            <p>price: {car.price}</p>
        </div>
    )
}
export default CarComponent