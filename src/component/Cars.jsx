import { useEffect, useRef, useState } from "react"
import axios from "axios"
import CarsDetail from "./carItem"
import FilterItem from "./filterItem"
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
            url:"http://localhost:3000/cars?",
            method:"get"
        }}
        else if(!price)
        {
        var config={
            url:`http://localhost:3000/cars?${filter}`,
            method:"get"
        }}
        else if(!filter){
            var config={
                url:`http://localhost:3000/cars?${price}`,
                method:"get"
            }} 
        
        else {
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

const handleFilter=()=>{
    const yearElem=document.getElementsByClassName('year')
    const typeElem=document.getElementsByClassName('type')
    let filter1=null
    for(let item of yearElem)
    {
        if(item.checked===true)
        if(!filter1)
        filter1=`year=${item.value}`
        else
        filter1=`${filter1}&year=${item.value}`
    }
    let filter2=null
    for(let item of typeElem)
    {
        if(item.checked===true)
        if(!filter2)
        filter2=`type=${item.value}`
        else
        filter2=`${filter2}&type=${item.value}`
    }
    let param=null;
    if(filter1&&filter2)
    param=`${filter1}&${filter2}`
    else if(!filter1)
    param=filter2
    else if(!filter2)
    param=filter1
setFilter(param)
}
const handlePrice=(e)=>{
    let price=`_sort=price&_order=${e.target.value}`
    setPrice(price)
}    
if(isLoading)
return <h3>...loading</h3>
    
return(<>
<div>
    <div><h3>Filter</h3></div>
    <div>
        <h4>Filter by Year</h4>
        {
            <div>{
                datas1.map(item=><FilterItem key={"year"+item.id}onClick={handleFilter}title={item.year} type="year"/>)
                }</div>
        }
        <h4>Filter by Type</h4>
        {
            <div>{
                datas1.map(item=><FilterItem key={"type"+item.id} onClick={handleFilter}title={item.type} type="type"/>)
                }</div>
        }
    </div>
    <div>
        <h3>sort by price</h3>
        <div>
        <div><label>Low to High</label>
    <input type="radio" name="price" onChange={handlePrice} value="asc"/></div>
    <div>
    <label>High to Low</label>
    <input type="radio" name="price"  onChange={handlePrice} value="desc "/>
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