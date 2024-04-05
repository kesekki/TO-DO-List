import { useState } from "react";

export default function Header() {
    let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
    return (
        <div className="title">
            <h1>TO-DO List</h1>
            <h3>Время сейчас: {ctime}</h3>
        </div>
    )
}