import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameModelBase } from "./PokemonV2PokemonhabitatnameModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameModel */
export interface PokemonV2PokemonhabitatnameModelType extends Instance<typeof PokemonV2PokemonhabitatnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameModel */
export { selectFromPokemonV2Pokemonhabitatname, pokemonV2PokemonhabitatnameModelPrimitives, PokemonV2PokemonhabitatnameModelSelector } from "./PokemonV2PokemonhabitatnameModel.base"

/**
 * PokemonV2PokemonhabitatnameModel
 *
 * columns and relationships of "pokemon_v2_pokemonhabitatname"
 */
export const PokemonV2PokemonhabitatnameModel = PokemonV2PokemonhabitatnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
