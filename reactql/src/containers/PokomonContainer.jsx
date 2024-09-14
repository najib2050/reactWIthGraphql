import { useQuery } from "@apollo/client";
import Pokomon from "../components/Pokomon.jsx";
import { GET_POKEMONS } from "../graphql/GetPokomons.jsx";
function PokomonContainer() {
  const {data:{pokemons=[]}={}}=useQuery(GET_POKEMONS,{
    variables:{first: 9}
  });

  console.log("in the pokomon container", pokemons)
  return (
    <div>
      {pokemons && pokemons.map(pokemon=>{
        console.log("p____", pokemon)
        return(
          <div key={pokemon.id} >

           <Pokomon pokemon={pokemon}/>
          </div>
        )
      })}
    </div>
  );
}

export default PokomonContainer;
