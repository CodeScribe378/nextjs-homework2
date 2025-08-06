import {getCars} from "@/services/api.service";
import CarComponent from "@/components/CarComponent/CarComponent";

const CarsComponent= async ()=>{
    const cars = await getCars()
    return(
        <div>
            {cars.map((car)=><CarComponent key={car.id} car={car}/>)}
        </div>
    )
}
export default CarsComponent