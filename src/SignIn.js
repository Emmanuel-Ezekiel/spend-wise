import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { BsArrowRight } from 'react-icons/bs'


const eye = <FontAwesomeIcon icon={faEye} />;

const arrow = < BsArrowRight />
function SignIn() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
    return (
        <>
        <div className="header-signin">
                {/* <div className="position"></div> */}
        <p> <b>Monitor</b> user interactions on <b> Spendwise </b></p>
        <div className="form-sigin">
            <form action="" name="signin" className='signin-container'>
                <div className="form-content">
                    <label htmlFor="">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="form-content">
                    <label htmlFor="">Password</label>
                    <input type={passwordShown ? "text" : "password"} name="password"  />
                    <span className="show" onClick={togglePasswordVisiblity}> Show </span>
                </div>
         </form>
                <div className="signin-btn">
                <button className="btn-sign"> Login In </button><span className="arrow-right">{arrow}</span>
            </div>
            <p className="signin-account">
                Don't have an account?
                <a className="login"href="/"> Signup</a>
            </p>
        </div>
         
        </div>
        </>
    )
}

export default SignIn
