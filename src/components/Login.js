import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/user/login", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged-in Successfully", "success");
            navigate("/");
        }
        else {
            props.showAlert("Invalid details", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    // import React, { useState } from 'react'

    // function Login() {
    //     const [email, setEmail] = useState("");
    //     const [password, setPassword] = useState("");
    //     const [Entry, setEntry] = useState([]);

    //     const submitForm = (e) => {
    //         e.preventDefault();
    //         const newEntry = { email: email, password: password };
    //         setEntry([...Entry, newEntry]);
    //         console.log(newEntry);
    //     }

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
                                {/* <center> */}
                                <div>
                                    <label htmlFor="email" className="form-label text-2xl">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <br />

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-2xl">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                                </div>
                                <br />
                                {/* <br /> */}

                                <button type="submit" className="bg-blue-500 text-2xl p-2 rounded-full">Submit</button>
                                <div className="text-center lg:text-left">
                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Don't have an account?
                                        <Link
                                            to="/signup"
                                            className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                        >Register</Link>
                                    </p>
                                </div>
                                {/* </center> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login

