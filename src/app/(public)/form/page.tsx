import {serviceCar} from "@/services-actions/servicesActions";


const FormPage =()=>{
    return(
        <div>
            <form action={serviceCar}>
                <input type='text' name={'brand'} placeholder={'brand'}/>
                <input type='number' name={'price'} placeholder={'price'}/>
                <input type='number' name={'year'} placeholder={'year'}/>
                <button>enter car</button>
            </form>
        </div>
    )
}
export default FormPage