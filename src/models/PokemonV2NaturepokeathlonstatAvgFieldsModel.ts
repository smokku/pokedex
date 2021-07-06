import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatAvgFieldsModelBase } from "./PokemonV2NaturepokeathlonstatAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatAvgFieldsModel */
export interface PokemonV2NaturepokeathlonstatAvgFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatAvgFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatAvgFields, pokemonV2NaturepokeathlonstatAvgFieldsModelPrimitives, PokemonV2NaturepokeathlonstatAvgFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatAvgFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2NaturepokeathlonstatAvgFieldsModel = PokemonV2NaturepokeathlonstatAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
