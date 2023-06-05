import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Validate";
import axios from "axios";
import { getTypes, createPokemon } from "../../redux/action";

function Form() {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name:"",
    image:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    types:[],
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const selectHandler = (event) => {
    setForm({
      ...form,
      types: [...form.types, Number(event.target.value)],
    });
  };




  const submitHandler = async (event) => {
    event.preventDefault();
    const NewPoke = {
      name: form.name,
      image: form.image,
      hp: Number(form.hp),
      attack: Number(form.attack),
      defense: Number(form.defense),
      speed: Number(form.speed),
      height: Number(form.height),
      weight: Number(form.weight),
      types: form.types,
  }
    alert(`A Wild ${form.name} has Appeared`);
    dispatch(createPokemon(NewPoke))
    // await axios
    //   .post("http://localhost:3001/pokemon", form)
    //   .then((res) => alert(res))
    //   .catch((err) => alert(err));
  };

  return (
    <div className={style.container}>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
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
          <label>type 1: </label>
          <select onChange={(select) => selectHandler(select)}>
            {types.map((type) => (
              <option value={type.id} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div>
          <label>type 2: </label>
          <select onChange={(select) => selectHandler(select)}>
            {types.map((type) => (
              <option value={type.id} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div> */}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
