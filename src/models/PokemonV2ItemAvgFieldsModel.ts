import { Instance } from "mobx-state-tree"
import { PokemonV2ItemAvgFieldsModelBase } from "./PokemonV2ItemAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemAvgFieldsModel */
export interface PokemonV2ItemAvgFieldsModelType extends Instance<typeof PokemonV2ItemAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemAvgFieldsModel */
export { selectFromPokemonV2ItemAvgFields, pokemonV2ItemAvgFieldsModelPrimitives, PokemonV2ItemAvgFieldsModelSelector } from "./PokemonV2ItemAvgFieldsModel.base"

/**
 * PokemonV2ItemAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemAvgFieldsModel = PokemonV2ItemAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
