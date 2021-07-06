import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatMinFieldsModelBase } from "./PokemonV2PokeathlonstatMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatMinFieldsModel */
export interface PokemonV2PokeathlonstatMinFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatMinFieldsModel */
export { selectFromPokemonV2PokeathlonstatMinFields, pokemonV2PokeathlonstatMinFieldsModelPrimitives, PokemonV2PokeathlonstatMinFieldsModelSelector } from "./PokemonV2PokeathlonstatMinFieldsModel.base"

/**
 * PokemonV2PokeathlonstatMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokeathlonstatMinFieldsModel = PokemonV2PokeathlonstatMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
