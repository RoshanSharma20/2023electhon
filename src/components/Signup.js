import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = credentials;
        const response = await fetch("http://localhost:5000/user/signup", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkNjZhNjcwZDQ3MWYyNDZkMjM0MzI0In0sImlhdCI6MTY3NTE1NzQzMn0.ZAXFvMaZO84reTZUj0I99RSG5FJOoCRf0kP5lURa1qY"
            },
            body: JSON.stringify({ name, email, password, confirmPassword })
        });
        const json = await response.json();
        console.log(json);
        // localStorage.setItem('token', json.authtoken);
        // navigate("/");
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Account created successfully", "success");
        }
        else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <>
            {/* ///////////////////////////////////////////////////// */}
            <section className="h-screen">
                <div className="h-full">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="" />
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-2xl">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
                                </div>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-2xl">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-2xl">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required />
                                </div>
                                <br />
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label text-2xl">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={onChange} required />
                                </div>
                                <br />
                                <button type="submit" className="bg-blue-500 text-2xl p-2 rounded-full">Submit</button>
                                {/* <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" autoComplete='off' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <button type="submit">Register</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup

