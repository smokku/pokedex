import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkAvgFieldsModelBase } from "./PokemonV2PalparkAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkAvgFieldsModel */
export interface PokemonV2PalparkAvgFieldsModelType extends Instance<typeof PokemonV2PalparkAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkAvgFieldsModel */
export { selectFromPokemonV2PalparkAvgFields, pokemonV2PalparkAvgFieldsModelPrimitives, PokemonV2PalparkAvgFieldsModelSelector } from "./PokemonV2PalparkAvgFieldsModel.base"

/**
 * PokemonV2PalparkAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PalparkAvgFieldsModel = PokemonV2PalparkAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
