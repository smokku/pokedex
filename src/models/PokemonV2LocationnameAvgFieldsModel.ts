import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameAvgFieldsModelBase } from "./PokemonV2LocationnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameAvgFieldsModel */
export interface PokemonV2LocationnameAvgFieldsModelType extends Instance<typeof PokemonV2LocationnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameAvgFieldsModel */
export { selectFromPokemonV2LocationnameAvgFields, pokemonV2LocationnameAvgFieldsModelPrimitives, PokemonV2LocationnameAvgFieldsModelSelector } from "./PokemonV2LocationnameAvgFieldsModel.base"

/**
 * PokemonV2LocationnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationnameAvgFieldsModel = PokemonV2LocationnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
