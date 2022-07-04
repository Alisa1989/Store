import { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const ProductForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
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

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    axios.post("http://localhost:4000/sellersInventory/sellers/1/products", formState)
    .then(res => {console.log(res.data);
    setFormState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
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
    title: yup.string().required(),
    price: yup
      .number("price must be a number").required("price is required").positive(),
    description: yup.string().required("description is required").min(20, "description must be at least 20 characters"),
    category: yup.string().oneOf(["men's clothing", "jewelery", "electronics", "women's clothing", "other"], "Please select a value"),
    image: yup.mixed().required("image is required"),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [formState, formSchema]);

  return (
    <form onSubmit={formSubmit}>
      <h1> Create Product </h1>
      <label htmlFor="title">
        title
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Input Title"
          value={formState.title ?? ""}
          onChange={inputChange}
        />
        {errors.title.length > 0 ? (
          <p className="error">{errors.title}</p>
        ) : null}
      </label>
      <label htmlFor="price">
        price
        <input
          id="price"
          type="number"
          name="price"
          min="0"
          max="1000000"
          step="0.01"
          placeholder="Input price"
          value={formState.price ?? ""}
          onChange={inputChange}
        />
        {errors.price.length > 0 ? (
          <p className="error">{errors.price}</p>
        ) : null}
      </label>
      <label htmlFor="description">
        description
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Input description"
          value={formState.description ?? ""}
          onChange={inputChange}
        />
        {errors.description.length > 0 ? (
          <p className="error">{errors.description}</p>
        ) : null}
      </label>
      <label htmlFor="category">
      category
        <select
          id="category"
          type="text"
          name="category"
          value={formState.category ?? ""}
          onChange={inputChange}
        >
            <option value="">--Please choose an option--</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="other">other</option>
        </select>
        {errors.category.length > 0 ? (
          <p className="error">{errors.category}</p>
        ) : null}
      </label>
      <label htmlFor="image">
        image
        <input
          id="image"
          type="file"
          name="image"
          placeholder="Input image"
          accept="image/png, image/jpeg"
          value={formState.image ?? ""}
          onChange={inputChange}
        />
        {errors.image.length > 0 ? (
          <p className="error">{errors.image}</p>
        ) : null}
      </label>
      <button disabled={buttonDisabled}>Submit</button>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
    </form>
  );
};

export default ProductForm;
