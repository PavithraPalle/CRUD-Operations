import React, { useState } from 'react';



const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [file, setFile] = useState('');
    const [country, setCountry] = useState('');

    let handleGenderChange = e => {
        console.log(e);
        setGender(e.target.value);

    }

    let handleSubmit = e => {
        e.preventDefault();
        console.log(username, password, file, country);

    }
    return (
        <div className='formBlock'>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' placeholder='Enter username'
                        value={username}
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder='Enter email' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' />
                </div>
                <div>
                    <label>Gender</label>
                    <input type='radio' name='gender' value="male" checked={gender === 'male'} onChange={handleGenderChange} /><span>Male</span>
                    <input type='radio' name='gender' value="female" checked={gender === 'female'} onChange={handleGenderChange} /><span>Female</span>
                    <input type='radio' name='gender' value="others" checked={gender === 'others'} onChange={handleGenderChange} /><span>Others</span>

                </div>
                <div>

                    <textarea name='' rows='5' cols='30' placeholder='Enter your Address'
                        value={address}

                    ></textarea>
                </div>
                <div>
                    <label>File</label>
                    <input type='file'
                        value={file}
                        onChange={e => setFile(e.target.file(0))}
                    />
                </div>
                <div>
                    <select name='' id=''
                        value={country}
                        onChange={e => setCountry(e.target.country)}
                    >
                        <option>-----select country-----</option>
                        <option value='india'>India</option>
                        <option value='usa'>USA</option>
                        <option value='uk'>UK</option>
                        <option value='australia'>Australia</option>
                    </select>
                </div>
                <button type='submit' value='SignUp'>Submit</button>
            </form>
        </div>
    )
}

export default Form