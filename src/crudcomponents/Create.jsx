import React, { useState } from 'react'
import "./create.css";
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"
const Create = () => {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');

    const navigate = useNavigate();

    let handleSubmit =e=>{
        e.preventDefault();
        let payload = {name , email , phone};
        // console.log(payload);
        axios.post("http://localhost:8000/users" , payload)
        .then(res=>{
            // console.log("submitted successfully");
            toast.success("user created successfully")
            navigate("/")
        }).catch(err=>{
            // console.log(err)
            toast.error("User not created")
        })
    }
  return (
    <section id="formBlock">
        <article>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div className="formgroup">
                    <input type="text"  placeholder='enter user name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <input type="email"  placeholder='enter  email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <input type="tel" maxLength={10} placeholder='enter phone number'
                     value={phone}
                     onChange={e=>setPhone(e.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <input type="submit"  value="Create User"/>
                    
                </div>
                <div className="formgroup">
                    <Link to="/">Back to Home Page</Link>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Create