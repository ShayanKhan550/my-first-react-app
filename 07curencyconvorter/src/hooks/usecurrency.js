import { useEffect, useState } from "react";

function usecurency(curency){
    const [data , setData] = useState({})
    useEffect( ()=>{
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)} ,[curency])
    .then((ref) => ref.json())
    .then((ref) => setData(ref.curency))
    return data
}
export default usecurency