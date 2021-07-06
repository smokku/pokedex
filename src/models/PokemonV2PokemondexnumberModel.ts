import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberModelBase } from "./PokemonV2PokemondexnumberModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberModel */
export interface PokemonV2PokemondexnumberModelType extends Instance<typeof PokemonV2PokemondexnumberModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberModel */
export { selectFromPokemonV2Pokemondexnumber, pokemonV2PokemondexnumberModelPrimitives, PokemonV2PokemondexnumberModelSelector } from "./PokemonV2PokemondexnumberModel.base"

/**
 * PokemonV2PokemondexnumberModel
 *
 * columns and relationships of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberModel = PokemonV2PokemondexnumberModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
