import React, { useEffect } from 'react';
const Stories = () => {
    let isLoading=true;
    let API='http://hn.algolia.com/api/v1/search?query=html' ;
    const fetchApiData=async(url)=>{
        try{
            const res=await fetch(url);
            const data = await res.json();
            console.log(data);
        } 
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
    fetchApiData(API);
}, []);
if (isLoading) {
    return <h1> Loading.....</h1>
}
  return (
    <>
    <h1> My tech Post</h1>
    </>
  );
}
export default Stories;
