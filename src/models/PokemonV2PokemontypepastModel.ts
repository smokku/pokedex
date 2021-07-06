import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastModelBase } from "./PokemonV2PokemontypepastModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastModel */
export interface PokemonV2PokemontypepastModelType extends Instance<typeof PokemonV2PokemontypepastModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastModel */
export { selectFromPokemonV2Pokemontypepast, pokemonV2PokemontypepastModelPrimitives, PokemonV2PokemontypepastModelSelector } from "./PokemonV2PokemontypepastModel.base"

/**
 * PokemonV2PokemontypepastModel
 *
 * columns and relationships of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastModel = PokemonV2PokemontypepastModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
