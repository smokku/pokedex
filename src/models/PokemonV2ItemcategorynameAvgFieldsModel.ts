import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameAvgFieldsModelBase } from "./PokemonV2ItemcategorynameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameAvgFieldsModel */
export interface PokemonV2ItemcategorynameAvgFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameAvgFieldsModel */
export { selectFromPokemonV2ItemcategorynameAvgFields, pokemonV2ItemcategorynameAvgFieldsModelPrimitives, PokemonV2ItemcategorynameAvgFieldsModelSelector } from "./PokemonV2ItemcategorynameAvgFieldsModel.base"

/**
 * PokemonV2ItemcategorynameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemcategorynameAvgFieldsModel = PokemonV2ItemcategorynameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
