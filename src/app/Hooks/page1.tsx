"client side" ;
import React, { useEffect, useState } from 'react'



const Page1 = () => {
    const [loading, setLoading] = useState(false);
    const [refetchApi,setRefetchApi] =useState(false);
    useEffect(()=>{
        setLoading(true);
    setTimeout(() => {
      console.log("this is running before component load");
      setLoading(false);   
    }, 3000);    
    },[refetchApi]);
  return (
    <div>
        {loading? "loading ..... ":"This is my page"}</div>
  )
}

export default Page1;