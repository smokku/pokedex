import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameModelBase } from "./PokemonV2RegionnameModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameModel */
export interface PokemonV2RegionnameModelType extends Instance<typeof PokemonV2RegionnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameModel */
export { selectFromPokemonV2Regionname, pokemonV2RegionnameModelPrimitives, PokemonV2RegionnameModelSelector } from "./PokemonV2RegionnameModel.base"

/**
 * PokemonV2RegionnameModel
 *
 * columns and relationships of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameModel = PokemonV2RegionnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
