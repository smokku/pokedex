import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameAvgFieldsModelBase } from "./PokemonV2ItemattributenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameAvgFieldsModel */
export interface PokemonV2ItemattributenameAvgFieldsModelType extends Instance<typeof PokemonV2ItemattributenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameAvgFieldsModel */
export { selectFromPokemonV2ItemattributenameAvgFields, pokemonV2ItemattributenameAvgFieldsModelPrimitives, PokemonV2ItemattributenameAvgFieldsModelSelector } from "./PokemonV2ItemattributenameAvgFieldsModel.base"

/**
 * PokemonV2ItemattributenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemattributenameAvgFieldsModel = PokemonV2ItemattributenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
