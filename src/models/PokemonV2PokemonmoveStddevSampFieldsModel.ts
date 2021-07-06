import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveStddevSampFieldsModelBase } from "./PokemonV2PokemonmoveStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveStddevSampFieldsModel */
export interface PokemonV2PokemonmoveStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonmoveStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveStddevSampFieldsModel */
export { selectFromPokemonV2PokemonmoveStddevSampFields, pokemonV2PokemonmoveStddevSampFieldsModelPrimitives, PokemonV2PokemonmoveStddevSampFieldsModelSelector } from "./PokemonV2PokemonmoveStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonmoveStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonmoveStddevSampFieldsModel = PokemonV2PokemonmoveStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
