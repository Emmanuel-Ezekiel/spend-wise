import React from 'react'

function SignUp() {
    return (
        <>
            <div className="header">
                <h1> Join the Spendwise</h1>
            <div className="form">
                 <form action="">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Phone number</label>
                <input type="text" />
                <label htmlFor="">Pasword</label>
                <input type="text" />
                <label htmlFor="">Confirm password</label>
                <input type="text" />
                <label htmlFor="">Referral Code(optional)</label>
                <input type="text" />
            </form>
            <button> Sign Up <span></span></button>
            </div>
            </div>
        </>
    )
}

export default SignUp
