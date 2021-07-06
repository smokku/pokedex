import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameAvgFieldsModelBase } from "./PokemonV2ItemnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameAvgFieldsModel */
export interface PokemonV2ItemnameAvgFieldsModelType extends Instance<typeof PokemonV2ItemnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameAvgFieldsModel */
export { selectFromPokemonV2ItemnameAvgFields, pokemonV2ItemnameAvgFieldsModelPrimitives, PokemonV2ItemnameAvgFieldsModelSelector } from "./PokemonV2ItemnameAvgFieldsModel.base"

/**
 * PokemonV2ItemnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemnameAvgFieldsModel = PokemonV2ItemnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
