import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameModelBase } from "./PokemonV2StatnameModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameModel */
export interface PokemonV2StatnameModelType extends Instance<typeof PokemonV2StatnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameModel */
export { selectFromPokemonV2Statname, pokemonV2StatnameModelPrimitives, PokemonV2StatnameModelSelector } from "./PokemonV2StatnameModel.base"

/**
 * PokemonV2StatnameModel
 *
 * columns and relationships of "pokemon_v2_statname"
 */
export const PokemonV2StatnameModel = PokemonV2StatnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
