import React from 'react'

const LoginComponent = ({submitForm,form,handleInput}) => {
    return (
        <div className="rl_container">
            <form onSubmit = {submitForm} method="POST">
                <h2>LOGIN</h2>

                <div className="form_element">
                    <input type="email" 
                    placeholder="Enter your mail"
                    name = "email"
                    value = {form.email}
                    onChange = {handleInput}
                    >
                    </input>
                </div>
                <div className="form_element">
                    <input type="password" 
                    placeholder="Enter your password"
                    name = "password"
                    value = {form.password}
                    onChange = {handleInput}

                    />
                </div>
                <button type="submit">Login</button>
                <div className="error">
                {
                    form.error ? <div>{form.error}</div> : null
                }
                </div>
                
            </form>
        </div>
    )
}

export default LoginComponent;
