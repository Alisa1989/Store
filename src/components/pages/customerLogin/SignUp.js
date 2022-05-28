
import { useState } from "react";

const SignUp = () => {

const [formState, setFormState] = useState({
    email: "",
    passwrod: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: ""
})

const [buttonDisabled, setButtonDisabled] = useState(true)

const formSubmit = (e) => {
    e.preventdefault();
    console.log("form submitted!")
}

const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    const newFormData = {
    ...formState,
    [e.target.name]: e.target.value
};
    setFormState(newFormData); 
}
 
    return(
        <form onSubmit={formSubmit}>
            <h1> sign up </h1>
            <label htmlFor="email">
                email
                <input id="email" type="text" name="email" placeholder="Input Email" 
                value={formState.email ?? ""} onChange={inputChange}/>
            </label>
            <label htmlFor="password">
                password
                <input id="password" type="text" name="password" placeholder="Input Password" 
                value={formState.password ?? ""} onChange={inputChange}/>
            </label>
            <label htmlFor="firstName">
                first name
                <input id="firstName" type="text" name="firstName" placeholder="Input first name" 
                value={formState.firstName ?? ""} onChange={inputChange}/>
            </label>
            <label htmlFor="lastName">
                last name
                <input id="lastName" type="text" name="lastName" placeholder="Input last name" 
                value={formState.lastName ?? ""} onChange={inputChange}/>
            </label>
            <label htmlFor="dateOfBirth">
                date of birth
                <input id="dateOfBirth" type="text" name="dateOfBirth" placeholder="Input date of birth" 
                value={formState.dateOfBirth ?? ""} onChange={inputChange}/>
            </label>
            <label htmlFor="address">
                address
                <input id="address" type="text" name="address" placeholder="Input address" 
                value={formState.address ?? ""} onChange={inputChange}/>
            </label>
            <button disabled={buttonDisabled} >Submit</button>
        </form>
    )
}

export default SignUp;
