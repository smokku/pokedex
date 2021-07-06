import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonStddevSampFieldsModelBase } from "./PokemonV2PokemonStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonStddevSampFieldsModel */
export interface PokemonV2PokemonStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonStddevSampFieldsModel */
export { selectFromPokemonV2PokemonStddevSampFields, pokemonV2PokemonStddevSampFieldsModelPrimitives, PokemonV2PokemonStddevSampFieldsModelSelector } from "./PokemonV2PokemonStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonStddevSampFieldsModel = PokemonV2PokemonStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
