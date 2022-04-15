import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MyChart from '../Components/MyChart';

const DetailPage = () => {
    let params = useParams();
    const [repoDetails , setRepoDetails] = useState({});
    console.log(params);

    useEffect(() => {
        (async function(){
            const res =  await axios.get(`https://api.github.com/repos/${params.user}/${params.repo}`);
            console.log(res.data);
            setRepoDetails({...res.data})
        })(); 
         },[])
  return (
    <div>
        this is detail page of user {params.user} and repo {params.repo}
        {/* <MyChart /> */}
    </div>
  )
}

export default DetailPage