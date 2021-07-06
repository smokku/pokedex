import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameAvgFieldsModelBase } from "./PokemonV2TypenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameAvgFieldsModel */
export interface PokemonV2TypenameAvgFieldsModelType extends Instance<typeof PokemonV2TypenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameAvgFieldsModel */
export { selectFromPokemonV2TypenameAvgFields, pokemonV2TypenameAvgFieldsModelPrimitives, PokemonV2TypenameAvgFieldsModelSelector } from "./PokemonV2TypenameAvgFieldsModel.base"

/**
 * PokemonV2TypenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2TypenameAvgFieldsModel = PokemonV2TypenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
