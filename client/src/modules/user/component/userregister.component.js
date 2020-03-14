import React from 'react'

const UserRegisterComponent = ({submitForm,formData,handleInput}) => {
    return (
        <div className="rl_container">
            <form onSubmit={submitForm}>
                <h2>Register</h2>
                <div className="form_element">
                    <input type="text"
                        placeholder="Enter Firstname"
                        name = "firstname"
                        value = {formData.firstname}
                        onChange = {handleInput}
                        required
                    />
                </div>
                <div className="form_element">
                    <input type="text"
                     placeholder="Enter Lastname"
                     name = "lastname"
                     value = {formData.lastname}
                     onChange = {handleInput}
                     required
                    />
                </div>

                <div className="form_element">
                    <input type="email"
                    placeholder="Enter Email"
                    name = "email"
                    value = {formData.email}
                    onChange = {handleInput}
                    required
                    />
                </div>
                <div className="form_element">
                    <input type="text"
                    placeholder="Enter username"
                    name = "username"
                    value = {formData.username}
                    onChange = {handleInput}
                    required
                    />
                </div>
                <div className="form_element">
                    <input type="password"
                    placeholder="Enter password"
                    name = "password"
                    value = {formData.password}
                    onChange = {handleInput}
                    required
                    />
                </div>
                <button type="submit">Register</button>
                {formData.error && 
                    <div className="error">
                        Register Failed! Please Choose a strong password
                    </div>}
            </form>

        </div>
    )
}

export default UserRegisterComponent;
