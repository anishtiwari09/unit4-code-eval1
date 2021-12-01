import { useEffect, useState } from "react"
import axios from "axios"
import CarsDetail from "./carItem"
export default function Cars(){
    const [datas,setDatas]=useState([])
    const [isLoading,setIsLoading ]=useState(true)
    const getCarData=()=>{
        const config={
            url:"http://localhost:3000/cars",
            method:"get"
        }
        return axios(config)
    }
    useEffect(()=>{
        handleGetData()
    },[])
    const handleGetData=()=>{
         getCarData().then(res=>{
            setDatas(res.data)
            setIsLoading(false)
         }).catch(err=>{console.log(err)})
    }
if(isLoading)
return <h3>...loading</h3>
    
return(<>
<div>
    <div><h3>Filter</h3></div>
    <div>
        <div><label>sort by car year</label>
    <input type="radio" name="filter" id="filter"/></div>
    <label>sort by car type</label>
    <input type="radio" name="filter" id="filter"/>
    </div>
</div>
<div>
    <ul>
        {  datas.map((item)=><CarsDetail title={item.name} key={item.id} year={item.year} id={item.id} price={item.price}/>)}
    </ul>
</div>
</>)

}