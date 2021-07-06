import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatSumFieldsModelBase } from "./PokemonV2PokeathlonstatSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatSumFieldsModel */
export interface PokemonV2PokeathlonstatSumFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatSumFieldsModel */
export { selectFromPokemonV2PokeathlonstatSumFields, pokemonV2PokeathlonstatSumFieldsModelPrimitives, PokemonV2PokeathlonstatSumFieldsModelSelector } from "./PokemonV2PokeathlonstatSumFieldsModel.base"

/**
 * PokemonV2PokeathlonstatSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokeathlonstatSumFieldsModel = PokemonV2PokeathlonstatSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
