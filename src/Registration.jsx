// import { useState } from 'react'
import "./App.css"
import { useForm } from "react-hook-form"
import axios from "axios";
import { Link } from 'react-router-dom'
import { useState } from "react";

// import Log from "./Log"; 

const Registration = () => {


    const { register, handleSubmit } = useForm()
    const [data,setData] = useState({
        name:'',
        email:"",
        password:""
    })

    const onSubmit = async () => {
        console.log(data)

        try {
            const api = await axios.post("http://192.168.100.55:3000/api/signup", data)        // .then((result)=>api.data)
            console.log(api.data)
        } catch (error) {
            console.log(error.message)

        }
    }
    return (
        <>
            <div className="container">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-left">
                            <h1 className="modal-title">Welcome!</h1>
                            <p className="modal-desc">
                                To the My website for programmers.
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-block">
                                    <label htmlFor="email" className="input-label">
                                        Name
                                    </label>
                                    <input
                                        type="name"
                                        autoComplete="off"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        onChange={(e)=>setData({...data,name:e.target.value})}
                                        // ref={register}

                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="email" className="input-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        {...register("email")}
                                    // ref={register}

                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="password" className="input-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        {...register("password")}
                                    // ref={register}
                                    />
                                </div>
                                <div className="modal-buttons">
                                    <button className="input-button" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <p className="sign-up">
                                Already have an Account?
                            <Link to="/login" >Login Now</Link>
                            </p>
                        </div>

                        <div className="modal-right">
                            <img
                                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Registration