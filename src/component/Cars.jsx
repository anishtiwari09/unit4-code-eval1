import { useEffect, useState } from "react"
import axios from "axios"
import CarsDetail from "./carItem"
export default function Cars(){
    const [filter,setFilter]=useState(null)
    const [datas,setDatas]=useState([])
    const [isLoading,setIsLoading ]=useState(true)
    const getCarData=(filter)=>{
        console.log('filter',filter)
        if(!filter){
        var config={
            url:"http://localhost:3000/cars",
            method:"get"
        }}
        else
        {
        var config={
            url:`http://localhost:3000/cars?_sort=${filter}&_order=asc`,
            method:"get"
        }}
        return axios(config)
    }
    useEffect(()=>{
        handleGetData(filter)
    },[filter])
    const handleGetData=(filter)=>{
         getCarData(filter).then(res=>{
            setDatas(res.data)
            setIsLoading(false)
         }).catch(err=>{console.log(err)})
    }
    const handleFilter=(e)=>{
       setFilter(e.target.value)
    }
if(isLoading)
return <h3>...loading</h3>
    
return(<>
<div>
    <div><h3>Filter</h3></div>
    <div>
        <div><label>sort by car year</label>
    <input type="radio" name="filter" id="filter" onChange={handleFilter} value="year"/></div>
    <div>
    <label>sort by car type</label>
    <input type="radio" name="filter" id="filter" onChange={handleFilter} value="type"/>
    </div>
    </div>
</div>
<div>
    <ul>
        {  datas.map((item)=><CarsDetail title={item.name} key={item.id} year={item.year} id={item.id} price={item.price}/>)}
    </ul>
</div>
</>)

}