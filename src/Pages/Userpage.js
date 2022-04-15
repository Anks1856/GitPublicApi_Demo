import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Userpage = () => {
    let params = useParams();
    const [userRepo , setUserRepo] = useState([]);

    useEffect(() => {
       (async function(){
           const res =  await axios.get(`https://api.github.com/users/${params.user}/repos`);
           console.log(res.data);
           setUserRepo([...res.data])
       })(); 
        },[])

  return (
    <div>
        <h1>Userpage {params.user}</h1>
        <div>
            {
                userRepo.map(i => <p>{i.name}</p>)
            }
        </div>
    </div>
  )
}

export default Userpage