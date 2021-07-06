import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameAvgFieldsModelBase } from "./PokemonV2ContesttypenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameAvgFieldsModel */
export interface PokemonV2ContesttypenameAvgFieldsModelType extends Instance<typeof PokemonV2ContesttypenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameAvgFieldsModel */
export { selectFromPokemonV2ContesttypenameAvgFields, pokemonV2ContesttypenameAvgFieldsModelPrimitives, PokemonV2ContesttypenameAvgFieldsModelSelector } from "./PokemonV2ContesttypenameAvgFieldsModel.base"

/**
 * PokemonV2ContesttypenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesttypenameAvgFieldsModel = PokemonV2ContesttypenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
