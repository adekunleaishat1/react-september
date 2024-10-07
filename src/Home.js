import { useState } from "react"

const Home = () =>{
    let name = "Tola"
    const [username, setusername] = useState("lola")
    const [input1, setinput1] = useState("")
    const [input2, setinput2] = useState("")
    const [userarray, setuserarray] = useState([])
     console.log(input1);
     
     const handelclick = () =>{
    //    name = "tolu"
    //    console.log(name);
    //    setusername("bolu")
       let userdetail ={
        useranem:input1,
        email: input2
       }
       console.log(userdetail);
       setuserarray([...userarray, userdetail])
        console.log(userarray);
        
     }
    return(
        <>
             <h1>{name}</h1> 
             <p>{username}</p>    
             <button onClick={handelclick}>Click</button> 
             <input onChange={(e)=>setinput1(e.target.value) } type="text" />
             <input onChange={(e)=>setinput2(e.target.value) } type="text" />
             {/* {userarray.map((user)=>{
                return(
                    <>
                <h1>{user.useranem}</h1>
                <h1>{user.email}</h1>
                </>
                )
             })} */}
             {userarray.map((user)=>(
                 <>
                    <h1>{user.useranem}</h1>
                    <h1>{user.email}</h1>
                </>
                ))}
        </>
    )
}


export default Home