import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatStddevSampFieldsModelBase } from "./PokemonV2PokeathlonstatStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatStddevSampFieldsModel */
export interface PokemonV2PokeathlonstatStddevSampFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatStddevSampFieldsModel */
export { selectFromPokemonV2PokeathlonstatStddevSampFields, pokemonV2PokeathlonstatStddevSampFieldsModelPrimitives, PokemonV2PokeathlonstatStddevSampFieldsModelSelector } from "./PokemonV2PokeathlonstatStddevSampFieldsModel.base"

/**
 * PokemonV2PokeathlonstatStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokeathlonstatStddevSampFieldsModel = PokemonV2PokeathlonstatStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
