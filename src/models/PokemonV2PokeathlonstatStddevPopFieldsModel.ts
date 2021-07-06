import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatStddevPopFieldsModelBase } from "./PokemonV2PokeathlonstatStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatStddevPopFieldsModel */
export interface PokemonV2PokeathlonstatStddevPopFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatStddevPopFieldsModel */
export { selectFromPokemonV2PokeathlonstatStddevPopFields, pokemonV2PokeathlonstatStddevPopFieldsModelPrimitives, PokemonV2PokeathlonstatStddevPopFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevPopFieldsModel.base"

/**
 * PokemonV2PokeathlonstatStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokeathlonstatStddevPopFieldsModel = PokemonV2PokeathlonstatStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
