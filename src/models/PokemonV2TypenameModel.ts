import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameModelBase } from "./PokemonV2TypenameModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameModel */
export interface PokemonV2TypenameModelType extends Instance<typeof PokemonV2TypenameModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameModel */
export { selectFromPokemonV2Typename, pokemonV2TypenameModelPrimitives, PokemonV2TypenameModelSelector } from "./PokemonV2TypenameModel.base"

/**
 * PokemonV2TypenameModel
 *
 * columns and relationships of "pokemon_v2_typename"
 */
export const PokemonV2TypenameModel = PokemonV2TypenameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
