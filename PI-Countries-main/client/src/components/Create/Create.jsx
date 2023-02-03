import React from "react";
import { Link } from "react-router-dom";
import { getCountries, postActivity } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./create.css";

function validate(input) {
  let errors = {};
  if (!input.name || input.name.length < 3) {
    errors.name = "You need to put a name for the activity";
  } else if (!input.difficulty) {
    errors.difficulty = "You need to put a difficulty for the activity";
  } else if (!input.duration) {
    errors.duration = "You need to put a duration for the activity";
  } else if (!input.season) {
    errors.season = "You need to put a season for the activity";
  } else if (!input.countries) {
    errors.countries = "You need to put a country for the activity";
  }
  return errors;
}

export default function Create() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleDelete(e) {
    setInput({
      ...input,
      countries: input.countries.filter((countries) => countries !== e), // me devuelve el estado nuevo, que es un array, sin el elemento que clickee
    });
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleChange(e) {
    //cada vez que se ejecuta handlechange, al estado input,
    setInput({
      //ademas de lo que tiene, se le agrega el target.value
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  
  function handleSelect(e) {
    if (input.countries.includes(e.target.value)) {
      // cuando mando el country, traigo lo que ya habia en el estado y le concateno el target value
      setInput({
        ...input,
        countries: [...input.countries, e.target.value],
      });
    }else{
      setInput({
        ...input,
        countries: [e.target.value],
      });

    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(input));
    const errorCompletarFormu = validate(input);
    if (Object.values(errorCompletarFormu).length !== 0 || !input.countries) {
      alert("All the fields are required");
    } else {
      dispatch(postActivity(input));
      console.log()
      alert("Activity created successfully!");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
    }
  }

  return (
    <div className="main-activities">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="main-phrase">
          <h1> "Create your own Activity !" </h1>
        </div>
        <div>
          <div className="main-separate">
            <label>Name of the activity</label>
            <input
              placeholder="Swimming,climbing,etc"
              type="text"
              value={input.name}
              name="name"
              autocomplete="off"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="main-separate">
            <label>Difficulty</label>
            <select
              name="difficulty"
              value={input.difficulty}
              className=""
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select the difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              {errors.difficulty && (
                <p className="error">{errors.difficulty}</p>
              )}
            </select>
          </div>
        </div>
        <div>
          <div className="main-separate">
            <label>Enter activity duration</label>
            <input
              type="number"
              value={input.duration}
              name="duration"
              autocomplete="off"
              min="0"
              max="24"
              onChange={(e) => handleChange(e)}
              placeholder="...hs"
            />
            {errors.duration && <p className="error">{errors.duration}</p>}
          </div>
        </div>
        <div>
          <div className="main-separate">
            <label>Season of the year</label>
            <select
              value={input.season}
              name="season"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select the season</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              {errors.season && <p className="error">{errors.season}</p>}
            </select>
          </div>
        </div>
        <div>
          <div className="main-separate">
            <label>Country</label>
            <select onChange={(e) => handleSelect(e)}>
              {countries.map((countries) => (
                <option value={countries.name}>{countries.name}</option>
              ))}
            </select>
          </div>
        </div>
        {input.countries.map((e) => (
          <div>
            <p>{e}</p>
            <button onClick={() => handleDelete(e)}>X</button>
          </div>
        ))}

        <button className="crearSubmit" type="submit">
          Create activity
        </button>
        <Link to="/home">
          {" "}
          <button className="main-back"> Back </button>
        </Link>
      </form>
        
      
    </div>
  );
}
