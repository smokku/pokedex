import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatSumFieldsModelBase } from "./PokemonV2NaturepokeathlonstatSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatSumFieldsModel */
export interface PokemonV2NaturepokeathlonstatSumFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatSumFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatSumFields, pokemonV2NaturepokeathlonstatSumFieldsModelPrimitives, PokemonV2NaturepokeathlonstatSumFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatSumFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2NaturepokeathlonstatSumFieldsModel = PokemonV2NaturepokeathlonstatSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
