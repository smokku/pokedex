import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatAvgFieldsModelBase } from "./PokemonV2PokeathlonstatAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatAvgFieldsModel */
export interface PokemonV2PokeathlonstatAvgFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatAvgFieldsModel */
export { selectFromPokemonV2PokeathlonstatAvgFields, pokemonV2PokeathlonstatAvgFieldsModelPrimitives, PokemonV2PokeathlonstatAvgFieldsModelSelector } from "./PokemonV2PokeathlonstatAvgFieldsModel.base"

/**
 * PokemonV2PokeathlonstatAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokeathlonstatAvgFieldsModel = PokemonV2PokeathlonstatAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
