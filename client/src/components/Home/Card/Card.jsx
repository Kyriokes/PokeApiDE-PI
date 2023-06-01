import style from "./Card.module.css"

function Card(poke) {
    return ( 
    <div className={style.container}>
        <h1>{poke.name}</h1>
        <div className={style.stats}>
        <p>height={poke.height}</p>
        <p>weight={poke.weight}</p>
        <p>hp={poke.hp}</p>
        <p>attack={poke.attack}</p>
        <p>defense={poke.defense}</p>
        <p>speed={poke.speed}</p>
        <p>types={poke.types}</p>
        </div>
    </div>
     );
}

export default Card;