import { useState, useEffect } from "react";

   const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    // console.log("use fetch called@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", url, options)

    const fetchData = async (url, options) => {
  
      try {
              setIsLoading(true);
              
                console.log("use fetch called", url, options)
                const baseURL = import.meta.env.VITE_API_URL
                console.log("use baseURL*******************************************************************", baseURL)
                const urlfull = baseURL + "/"+ url
                console.log("use fetch url", urlfull)
                console.log("use fetch options", options)



                const response = await fetch(urlfull,  options);
                console.log("original response in custom hook^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",response)
                
                const data = await response.json();
                console.log("response in custom hook---json---",data)
                if (!response.ok) throw new Error(JSON.stringify({status:response.status, statusText:response.statusText, message:data.detail }));
                console.log("response in custom hook",data)
                setData(data);
      } catch (err) {
        console.log("err usefetch",err)
        setErr(err);
      } finally {
        setIsLoading(false);
      }
    }
  

    useEffect(() => {
      // Initial fetch
      console.log("url in usefeeect cusotm hook",url)
      if (url) {
        fetchData()
      }
      
      
    }, [url, options]); // Refetch on dependency changes or trigger

    // console.log("in custom hook data, isLoading, error, fetchData", data, isLoading, err, fetchData)
    // console.log("in custom hook error",  err )

    // console.log("in custom hook fetchData", fetchData)

    return {data, isLoading, err, fetchData} ;
  };

export default useFetch;
