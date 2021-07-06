import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemStddevSampFieldsModelBase } from "./PokemonV2PokemonitemStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemStddevSampFieldsModel */
export interface PokemonV2PokemonitemStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonitemStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemStddevSampFieldsModel */
export { selectFromPokemonV2PokemonitemStddevSampFields, pokemonV2PokemonitemStddevSampFieldsModelPrimitives, PokemonV2PokemonitemStddevSampFieldsModelSelector } from "./PokemonV2PokemonitemStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonitemStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonitemStddevSampFieldsModel = PokemonV2PokemonitemStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
