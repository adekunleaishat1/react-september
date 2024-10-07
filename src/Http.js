
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Http = () => {
    const [data, setdata ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
       axios.get("https://robo-music-api.onrender.com/music/my-api")
       .then((res)=>{
        console.log(res.data);
          setdata(res.data)
       }).catch((err)=>{
        console.log(err);
        
       })
    }, [])
    
    const nextPage = (i) =>{
        
        navigate(`/one/${i}`)
    }
  return (
    <div>
       {data.map((music, i)=>(
        <>
        <div onClick={()=>nextPage(music.id)} key={i}>
        <img src={music.songImage} alt="" />
        <h1>{music.songTitle}</h1>
        </div>
        </>
       ))

       }
    </div>
  )
}

export default Http