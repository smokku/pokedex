import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaStddevSampFieldsModelBase } from "./PokemonV2PalparkareaStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaStddevSampFieldsModel */
export interface PokemonV2PalparkareaStddevSampFieldsModelType extends Instance<typeof PokemonV2PalparkareaStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaStddevSampFieldsModel */
export { selectFromPokemonV2PalparkareaStddevSampFields, pokemonV2PalparkareaStddevSampFieldsModelPrimitives, PokemonV2PalparkareaStddevSampFieldsModelSelector } from "./PokemonV2PalparkareaStddevSampFieldsModel.base"

/**
 * PokemonV2PalparkareaStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PalparkareaStddevSampFieldsModel = PokemonV2PalparkareaStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
