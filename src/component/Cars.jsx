import { useState } from "react"
import axios from "axios"
export default function Cars(){
    const [datas,setdatas]=useState([])
    const [isLoading,setIsLoading ]=useState(true)
    const getCarData=()=>{
        const config={
            url:"http://localhost:3000/cars",
            method:"get"
        }
        return axios(config)
    }
    const handleGetData=()=>{
         getCarData().then(res=>{
            datas(res.data)
         })
    }

    
return(<>

</>)

}