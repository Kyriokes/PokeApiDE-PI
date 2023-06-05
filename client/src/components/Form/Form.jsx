import style from "./Form.module.css";
import { useState } from "react";
import validate from "./Validate";

function Form(props) {
  const {} = props;

  const [form, setForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    height: "",
    img: "",
    types: [],
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    // const property = event.target.name;
    // const value = event.target.value;
    // setForm({ ...form, [property]: value });
    // validate(form)
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(validate(form));
  };

  return (
    <div className={style.container}>
      <h1>Form</h1>
      <form>
        <div>
          <label>name: </label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          />
        </div>
        {errors.name && <p>{errors.name}</p>}
        <div>
          <label>hp: </label>
          <input
            type="text"
            value={form.hp}
            onChange={changeHandler}
            name="hp"
          />
        </div>
        {errors.hp && <p>{errors.hp}</p>}
        <div>
          <label>attack: </label>
          <input
            type="text"
            value={form.attack}
            onChange={changeHandler}
            name="attack"
          />
        </div>
        {errors.attack && <p>{errors.attack}</p>}
        <div>
          <label>defense: </label>
          <input
            type="text"
            value={form.defense}
            onChange={changeHandler}
            name="defense"
          />
        </div>
        {errors.defense && <p>{errors.defense}</p>}
        <div>
          <label>speed: </label>
          <input
            type="text"
            value={form.speed}
            onChange={changeHandler}
            name="speed"
          />
        </div>
        {errors.speed && <p>{errors.speed}</p>}
        <div>
          <label>weight: </label>
          <input
            type="text"
            value={form.weight}
            onChange={changeHandler}
            name="weight"
          />
        </div>
        {errors.weight && <p>{errors.weight}</p>}
        <div>
          <label>height: </label>
          <input
            type="text"
            value={form.height}
            onChange={changeHandler}
            name="height"
          />
        </div>
        {errors.height && <p>{errors.height}</p>}
        <div>
          <label>img: </label>
          <input
            type="text"
            value={form.img}
            onChange={changeHandler}
            name="img"
          />
        </div>
        {errors.img && <p>{errors.img}</p>}
        <div>
          <label>types: </label>
          <input
            type="text"
            value={form.types}
            onChange={changeHandler}
            name="types"
          />
        </div>
        {errors.types && <p>{errors.types}</p>}
      </form>
    </div>
  );
}

export default Form;
