import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationModelBase } from "./PokemonV2PokemonformgenerationModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationModel */
export interface PokemonV2PokemonformgenerationModelType extends Instance<typeof PokemonV2PokemonformgenerationModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationModel */
export { selectFromPokemonV2Pokemonformgeneration, pokemonV2PokemonformgenerationModelPrimitives, PokemonV2PokemonformgenerationModelSelector } from "./PokemonV2PokemonformgenerationModel.base"

/**
 * PokemonV2PokemonformgenerationModel
 *
 * columns and relationships of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationModel = PokemonV2PokemonformgenerationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
