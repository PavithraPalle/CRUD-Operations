import React, { useEffect, useState } from 'react'
import "./create.css";
import { Link , useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"
const Edit = () => {
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');
    const [phone ,setPhone] = useState('');

    const navigate = useNavigate();

    // ! 
    const {userId} = useParams();
    // console.log(data.userId);

    // ! to print the existing value of a individual user
    useEffect(()=>{
      axios.get("http://localhost:8000/users/"+userId)
      .then(res=>{
        // console.log(res.data);
        setName(res.data.name)
        setEmail(res.data.email)
        setPhone(res.data.phone)
      }).catch(err=>console.log(err))
    },[])

    let handleSubmit =e=>{
        e.preventDefault();
        let payload = {name , email , phone};

        // console.log(payload);
        axios.put("http://localhost:8000/users/"+userId ,payload)
        .then(res=>{
          toast.success("user updated successfullt");
          navigate("/")
        })
        .catch(err=>toast.error("user not updated"));
       
    }
  return (
    <section id="formBlock">
        <article>
            <h1>Update User</h1>
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
                    <input type="submit"  value="Update User"/>
                    
                </div>
                <div className="formgroup">
                    <Link to="/">Back to Home Page</Link>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Edit