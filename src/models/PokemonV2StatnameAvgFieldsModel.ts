import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameAvgFieldsModelBase } from "./PokemonV2StatnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameAvgFieldsModel */
export interface PokemonV2StatnameAvgFieldsModelType extends Instance<typeof PokemonV2StatnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameAvgFieldsModel */
export { selectFromPokemonV2StatnameAvgFields, pokemonV2StatnameAvgFieldsModelPrimitives, PokemonV2StatnameAvgFieldsModelSelector } from "./PokemonV2StatnameAvgFieldsModel.base"

/**
 * PokemonV2StatnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2StatnameAvgFieldsModel = PokemonV2StatnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
