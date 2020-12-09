import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const initialValues = {
  title: "",
  director: "",
  metascore: "",
  stars: "",
};

const AddMovie = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      ...formValues,
      stars: formValues.stars.split(","),
    };

    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div>
        <h1>Add A Movie</h1>
      </div>
        <div>
          <input
            type="text"
            name="title"
            value={formValues.title}
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="director"
            value={formValues.director}
            placeholder="director"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="metascore"
            value={formValues.metascore}
            placeholder="metascore"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="stars"
            value={formValues.stars}
            placeholder="Stars, separate by commas"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;