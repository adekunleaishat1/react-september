import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Signup = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [alluser, setalluser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4567/user")
        .then((res)=>{
            console.log(res.data);
             setalluser(res.data)
        }).catch((err)=>{
            console.log(err);
            
        })
      
    }, [])
    

    const Register = ()=>{
     console.log(username, email , password);
     let userdetail = {
        username,
        email,
        password
     }
     const exist = alluser.find((user)=> user.email == email)
     if (exist) {
        alert("ALready a signed up user")
        setemail("")
        setpassword("")
        setusername("")
     }else{
        axios.post("http://localhost:4567/user",userdetail)
      .then((res)=>{
        console.log(res);
        setemail("")
        setpassword("")
        setusername("")
      }).catch((err)=>{
        console.log(err);
        
      })
     }
     
    
    }
   return (
    <>
          <div className='px-3 py-3 w-50 mx-auto shadow '>
            <h1 className='text-center '>Sign Up</h1>
            <div className='form-group mt-3'>
            <label htmlFor="">Username</label>
            <input value={username} onChange={(e)=>setusername(e.target.value)} className='form-control' type="text"  />
            </div>
            <div className='form-group mt-3'>
            <label htmlFor="">Email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} className='form-control' type="text"  />
            </div>
            <div className='form-group mt-3'>
            <label htmlFor="">Password</label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} className='form-control' type="password"  />
            </div>
            <button onClick={Register} className='btn btn-primary'>Sign Up</button>
            
          </div>
    </>
  )
}

export default Signup