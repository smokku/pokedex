import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameAvgFieldsModelBase } from "./PokemonV2GenerationnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameAvgFieldsModel */
export interface PokemonV2GenerationnameAvgFieldsModelType extends Instance<typeof PokemonV2GenerationnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameAvgFieldsModel */
export { selectFromPokemonV2GenerationnameAvgFields, pokemonV2GenerationnameAvgFieldsModelPrimitives, PokemonV2GenerationnameAvgFieldsModelSelector } from "./PokemonV2GenerationnameAvgFieldsModel.base"

/**
 * PokemonV2GenerationnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2GenerationnameAvgFieldsModel = PokemonV2GenerationnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
