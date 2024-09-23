import React,{useState} from 'react'

export default function About() {
    //internal style
    const [myStyle , setmyStyle] = useState({color: "white", background:"black"})
    const [btnText,setbtnText] = useState("light")

    const handleMode = () =>{
        
        if(myStyle.color=="white"){
            setmyStyle({color: "black", background:"white"})
            setbtnText("dark")
        }
        else {
            setmyStyle({color: "white", background:"black"})
            setbtnText("light")
        }
    
    }

  return (
   <>

   <div className='container'>
    <input type='text' placeholder='hello' style={myStyle}></input>
   </div>
   <div className='container my-3 mx-3'>
   <button type='button' className='btn btn-primary' onClick={handleMode} >Change color mode to {btnText}</button>
   </div>
   </>
  )
}
