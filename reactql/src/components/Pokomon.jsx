

function Pokomon({pokemon}) {
  console.log("pokomon")
 { console.log("pokemon",pokemon)}
  return (
    <div className="pokrmon">
        <div className="pokemon">
            <div className="pokemon__name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon__attacks">
              {/* we need on 3 attacts slice(0,3) */}
              {pokemon.attacks.special.slice(0,3).map(attack=>{
                // we dont have id and we cannot skip it the key so we nee unique by combing attack name and damage
                <span key={`${attack.name}-${attack.damge}`}>{attack.name}</span>
              })}
            </div>
        </div>
    </div>
  )
}

export default Pokomon