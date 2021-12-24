import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const arrow = < BsArrowRight />


function SignUp() { 
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


    return (
        <>
            <div className="header">
                    <p className="header-name"> <b>Join</b> the <b>Spendwise</b> </p>
            <div className="container">
                <form action="" name="signup" className='form-container'>
                <div className="form-content">
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-content">
                    <label htmlFor="">Email</label>
                    <input type="text" name="Email"  />
                </div>
                <div className="form-content">
                    <label htmlFor="">Phone number</label>
                    <input type="text" name="phone" />
                </div>
                <div className="form-content">
                    <label htmlFor="">Password</label>
                    <input type={passwordShown ? "text" : "password"} name="password"  />
                    <i className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <div className="form-content">
                    <label htmlFor="">Confirm password</label>
                    <input 
                    type={passwordShown ? "text" : "password"}  name="password"
                    />
                    <i className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
                <div className="form-content">
                    <label htmlFor="">Referral Code (optional)</label>
                    <input type="text" name="code" />
                </div>
            </form>
            <div className="btn">
                <button> Sign Up </button><span className="arrow-right">{arrow}</span>
            </div>
            <p className="sign-account">
                Already have an account?
                <a className="login"href="/SignIn"> Login</a>
            </p>
            </div>
            </div>
        </>
    )
}

export default SignUp
