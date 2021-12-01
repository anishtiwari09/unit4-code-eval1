export default function CarsDetail({id,title,type,year,price})
{
   return  <li>
       {title} - {type} - {year} - ${price} 
    </li>
}