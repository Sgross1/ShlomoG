import {useState,useEffect} from "react";


function useApi(initVal){
  const [_ar , setAr] = useState([])

  useEffect(() => {
    fetch(initVal)
    .then(resp => resp.json())
    .then(data => {
      console.log("useApi",data)
      setAr(data)
    })

    
  },[])

  return [_ar , setAr];
 }

 export default useApi;