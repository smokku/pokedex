import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformStddevSampFieldsModelBase } from "./PokemonV2PokemonformStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformStddevSampFieldsModel */
export interface PokemonV2PokemonformStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonformStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformStddevSampFieldsModel */
export { selectFromPokemonV2PokemonformStddevSampFields, pokemonV2PokemonformStddevSampFieldsModelPrimitives, PokemonV2PokemonformStddevSampFieldsModelSelector } from "./PokemonV2PokemonformStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonformStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformStddevSampFieldsModel = PokemonV2PokemonformStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
