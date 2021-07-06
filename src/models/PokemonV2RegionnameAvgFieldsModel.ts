import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameAvgFieldsModelBase } from "./PokemonV2RegionnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameAvgFieldsModel */
export interface PokemonV2RegionnameAvgFieldsModelType extends Instance<typeof PokemonV2RegionnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameAvgFieldsModel */
export { selectFromPokemonV2RegionnameAvgFields, pokemonV2RegionnameAvgFieldsModelPrimitives, PokemonV2RegionnameAvgFieldsModelSelector } from "./PokemonV2RegionnameAvgFieldsModel.base"

/**
 * PokemonV2RegionnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2RegionnameAvgFieldsModel = PokemonV2RegionnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
