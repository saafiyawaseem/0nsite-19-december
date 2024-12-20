import React, { useEffect , useState } from 'react'

const page2 = () => {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            console.log("This is running before component load")
         setLoading(false);
        },30000)
    },[])
  return (
    <div>
    {loading ? "Loading....": "This page is loading"}
    </div>
  )
}

export default page2