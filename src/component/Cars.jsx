import { useEffect, useRef, useState } from "react"
import axios from "axios"
import CarsDetail from "./carItem"
export default function Cars(){
    const [price,setPrice]=useState(null)
    const [filter,setFilter]=useState(null)
    const [datas1,setDatas1]=useState([])
    const [datas,setDatas]=useState([])
    const [isLoading,setIsLoading ]=useState(true)
    const getCarData=(filter,price)=>{
        console.log('filter',filter)
        if(!filter&&!price){
        var config={
            url:"http://localhost:3000/cars",
            method:"get"
        }}
        else if(!price)
        {
        var config={
            url:`http://localhost:3000/cars?${filter}`,
            method:"get"
        }}
        
        else{
        var config={
            url:`http://localhost:3000/cars?${filter}&${price}`,
            method:"get"
        }} 
        return axios(config)
    }
    useEffect(()=>{
        handleGetData1()
    },[])
    const handleGetData1=()=>{
         getCarData(filter,price).then(res=>{
            setDatas(res.data)
            setDatas1(res.data)
            setIsLoading(false)
         }).catch(err=>{console.log(err)})
    }
    const handleGetData=()=>{
        getCarData(filter,price).then(res=>{
           setDatas(res.data)
           setIsLoading(false)
        }).catch(err=>{console.log(err)})
   }
useEffect(()=>{
handleGetData(filter)
},[filter,price])
const handleFilter=(e)=>{
        let filters=null
if(!filter)
{
     filters=`${e.target.className}=${e.target.value}`
}
else 
{
     filters=`${filter}&${e.target.className}=${e.target.value}`
}
setFilter(filters)


    
}
const handlePrice=()=>{

}
    
if(isLoading)
return <h3>...loading</h3>
    
return(<>
<div>
    <div><h3>Filter</h3></div>
    <div>
        <div><label>Filter by car year</label>
    
    <div>
        {datas1.map(item=>{
           return( <><label>{item.year}</label>
            <input type="checkbox" value={item.year} onChange={handleFilter} className="year"/></>
            )
        })}
    </div>
    </div>
    <div>
    <label>filter by car type</label>
    <div>
        {datas1.map(item=>{
           return( <><label>{item.type}</label>
            <input type="checkbox" value={item.type} onChange={handleFilter} className="type"/></>
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
        {  datas.map((item)=><CarsDetail title={item.name} key={item.id} year={item.year} id={item.id} price={item.price} type={item.type}/>)}
    </ul>
</div>
</>)

}