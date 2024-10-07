import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Oneaudio = () => {
    const [onedata, setOnedata]= useState([])
    const route = useParams()
    console.log(route);
    useEffect(() => {
        axios.get(`https://robo-music-api.onrender.com/music/my-api/${route.i}`)
        .then((res)=>{
         console.log(res.data.data);
           setOnedata(res.data.data)
        }).catch((err)=>{
         console.log(err);
         
        })
     }, [])
    
  return (
    <div>
        {onedata.map((music)=>(
            <>
            <img src={music.songImage} alt="" />
            <h1>{music.songTitle}</h1>
            <p>{music.artistName}</p>
            </>
        ))

        }
    </div>
  )
}

export default Oneaudio