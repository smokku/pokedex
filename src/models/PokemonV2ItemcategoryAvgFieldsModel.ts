import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryAvgFieldsModelBase } from "./PokemonV2ItemcategoryAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryAvgFieldsModel */
export interface PokemonV2ItemcategoryAvgFieldsModelType extends Instance<typeof PokemonV2ItemcategoryAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryAvgFieldsModel */
export { selectFromPokemonV2ItemcategoryAvgFields, pokemonV2ItemcategoryAvgFieldsModelPrimitives, PokemonV2ItemcategoryAvgFieldsModelSelector } from "./PokemonV2ItemcategoryAvgFieldsModel.base"

/**
 * PokemonV2ItemcategoryAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemcategoryAvgFieldsModel = PokemonV2ItemcategoryAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
