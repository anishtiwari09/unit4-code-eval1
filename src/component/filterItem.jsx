export default function FilterItem({title,handleFilter,type,onClick})
{
    
    return(<>
        <label>{title}</label>
        <input type="checkbox" value={title} className={type} onChange={onClick}/></>
    )
}