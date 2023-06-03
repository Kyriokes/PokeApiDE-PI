import style from "./Card.module.css"

function Card({ id, name, height, weight, hp, attack, defense, speed, types, image }) {
    return ( 
    <div className={style.container}>
        <h1>{name}</h1>
        <img src={image} alt={name} className={style.image} />
        <div className={style.stats}>
        <p>id={id}</p>
        <p>height={height}</p>
        <p>weight={weight}</p>
        <p>hp={hp}</p>
        <p>attack={attack}</p>
        <p>defense={defense}</p>
        <p>speed={speed}</p>
        <div className={style.type}>
          {types.map((type, index) => (
            <span key={index} className={style[type]}>{type}</span>
          ))}
        </div>
        </div>
    </div>
     );
}

export default Card;