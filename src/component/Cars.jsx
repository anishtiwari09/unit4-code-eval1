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
            url:"http://localhost:3000/cars?type=suv",
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
    const handlePrice=(e)=>{

    }
if(isLoading)
return <h3>...loading</h3>
    
return(<>
<div>
    <div><h3>Filter</h3></div>
    <div>
        <div><label>Filter by car year</label>
    
    <div>
        {datas.map(item=>{
           return( <><label>{item.year}</label>
            <input type="checkbox" value={item.year} onChange={handleFilter} className="year"/></>
            )
        })}
    </div>
    </div>
    <div>
    <label>filter by car type</label>
    <div>
        {datas.map(item=>{
           return( <><label>{item.type}</label>
            <input type="checkbox" value={item.type} onChange={handleFilter}/></>
            )
        })}
    </div>
    </div>
    </div>
    <div>
        <h3>sort by price</h3>
        <div>
        <div><label>Low to High</label>
    <input type="radio" name="price" onChange={handlePrice} value="asc"/></div>
    <div>
    <label>High to Low</label>
    <input type="radio" name="price"  onChange={handlePrice} value="desc"/>
    </div>
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