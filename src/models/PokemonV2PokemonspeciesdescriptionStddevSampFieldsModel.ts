import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionStddevSampFields, pokemonV2PokemonspeciesdescriptionStddevSampFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonspeciesdescriptionStddevSampFieldsModel = PokemonV2PokemonspeciesdescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
