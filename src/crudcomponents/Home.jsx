import React, { useEffect, useState } from 'react'
import "./home.css"
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Home = () => {
    const [userData , setUserData] = useState([]);
    // console.log(userData);
    useEffect(()=>{
        axios.get("http://localhost:8000/users").then(res=>{
            // console.log(res.data);
            setUserData(res.data);
        }).catch(err=>console.log(err))
    },[]);

    // ! for deleting individual user
    const deleteUser = id =>{
        const confirm = window.confirm("Are you sure you want to delete user");
        if(confirm){
            axios.delete("http://localhost:8000/users/"+id)
            .then(res=>{
                toast.success("user deleted successfully");
               setTimeout(()=>{
                window.location.reload();
               },1500)
            }).catch(err=>toast.error("user not deleted"))
        }
    }
  return (
    <section id="homeBlock">
        <article>
            
            <h1>List Of Users</h1>
            <div className="createData">
                <Link to="/create">Add User (+)</Link>
            </div>
           {
            userData && userData.length > 0 ? (
                <table>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='edit'>Edit</Link>
                                        <button onClick={()=>deleteUser(user.id)} className='delete'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            ) : <h1>No Data available</h1>
           }
        </article>
    </section>
  )
}

export default Home