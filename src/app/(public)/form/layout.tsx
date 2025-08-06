import {Metadata} from "next";
import React from "react";


export const metadata: Metadata ={
    title: 'FormLayout title'
}

type Props ={
    children: React.ReactNode
}

const FormLayout = ({children}: Props)=>{
    return(
        <div>{children}</div>
    )
}
export default FormLayout