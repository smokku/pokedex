import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatStddevFieldsModelBase } from "./PokemonV2PokeathlonstatStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatStddevFieldsModel */
export interface PokemonV2PokeathlonstatStddevFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatStddevFieldsModel */
export { selectFromPokemonV2PokeathlonstatStddevFields, pokemonV2PokeathlonstatStddevFieldsModelPrimitives, PokemonV2PokeathlonstatStddevFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevFieldsModel.base"

/**
 * PokemonV2PokeathlonstatStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokeathlonstatStddevFieldsModel = PokemonV2PokeathlonstatStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
