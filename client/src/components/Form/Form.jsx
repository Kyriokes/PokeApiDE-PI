import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Validate";
import { getTypes, createPokemon } from "../../redux/action";

function Form() {
  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  console.log(`form arriba: ${form.types}`);

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
    let name = [];
    console.log(`el array:   ${event.target.value}`);
    if (event.target.name === "type 1") {
      name.push(event.target.value);
    }
    if (event.target.name === "type 2") {
      name.push(event.target.value);
    }
    setForm({
      ...form,
      types: [...form.types, ...name],
    });
    console.log(`form abajo: ${form}`);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const NewPoke = { 
      name: form.name.toLowerCase(),
      sprites: form.image,
      hp: Number(form.hp),
      attack: Number(form.attack),
      defense: Number(form.defense),
      speed: Number(form.speed),
      height: Number(form.height),
      weight: Number(form.weight),
      types: form.types,
    };
    console.log("form abajo:", JSON.stringify(form));
    console.log("NewPoke abajo:", JSON.stringify(NewPoke));

    alert(`A Wild ${form.name} has Appeared`);
    dispatch(createPokemon(NewPoke))

    console.log(`form abajo: ${form}`);
    console.log(`NewPoke abajo: ${NewPoke}`);
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
          <label>image: </label>
          <input
            type="text"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />
        </div>
        {errors.image && <p>{errors.image}</p>}



        <div className={style.typeOne}>
          <label>type 1: </label>
          <select name="type 1" onChange={(select) => selectHandler(select)}>
            {types?.map((type) => (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          </div>



          {/* <div className={style.typeTwo}>
          <label>type 1: </label>
          <select name="type 2" onChange={(select) => selectHandler(select)}>
            {types?.map((type) => (
              <option value={type.name} key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          </div> */}



        {form.types.length > 0 ? (
          <div className={style.typeTwo}>
            <label>type 2: </label>
            <select name="type 2" onChange={(select) => selectHandler(select)}>
              {types.map((type) => (
                <option value={type.name} key={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div></div>
        )}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
