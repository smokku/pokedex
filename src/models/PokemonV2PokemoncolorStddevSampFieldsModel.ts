import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorStddevSampFieldsModelBase } from "./PokemonV2PokemoncolorStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorStddevSampFieldsModel */
export interface PokemonV2PokemoncolorStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemoncolorStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorStddevSampFieldsModel */
export { selectFromPokemonV2PokemoncolorStddevSampFields, pokemonV2PokemoncolorStddevSampFieldsModelPrimitives, PokemonV2PokemoncolorStddevSampFieldsModelSelector } from "./PokemonV2PokemoncolorStddevSampFieldsModel.base"

/**
 * PokemonV2PokemoncolorStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemoncolorStddevSampFieldsModel = PokemonV2PokemoncolorStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
