import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeStddevSampFieldsModelBase } from "./PokemonV2PokemonshapeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeStddevSampFieldsModel */
export interface PokemonV2PokemonshapeStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonshapeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeStddevSampFieldsModel */
export { selectFromPokemonV2PokemonshapeStddevSampFields, pokemonV2PokemonshapeStddevSampFieldsModelPrimitives, PokemonV2PokemonshapeStddevSampFieldsModelSelector } from "./PokemonV2PokemonshapeStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonshapeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonshapeStddevSampFieldsModel = PokemonV2PokemonshapeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
