import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [post, setPost] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios.post("http://localhost:4000/login", formState)
    // .then(res => {setPost(res.data);
    .then(res => {console.log(res.data);
    setFormState({
        email: "",
        password: ""
    })
})
    .catch((err) => console.log(err.response));
  };

  const inputChange = (e) => {
    e.persist();
    // console.log("input changed!", e.target.value);
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const formSchema = yup.object().shape({
    email: yup.string().email("must be a valid email").required(),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be at least 8 characters"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState, formSchema]);

  return (
    <form onSubmit={formSubmit}>
      <h1> Log In </h1>
      <label htmlFor="email">
        email
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Input Email"
          value={formState.email ?? ""}
          onChange={inputChange}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>
      <label htmlFor="password">
        password
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Input Password"
          value={formState.password ?? ""}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>
      <button disabled={buttonDisabled}>Submit</button>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </form>
  );
};
};
export default Login;