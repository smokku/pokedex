import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaStddevSampFieldsModelBase } from "./PokemonV2MovemetaStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaStddevSampFieldsModel */
export interface PokemonV2MovemetaStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetaStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaStddevSampFieldsModel */
export { selectFromPokemonV2MovemetaStddevSampFields, pokemonV2MovemetaStddevSampFieldsModelPrimitives, PokemonV2MovemetaStddevSampFieldsModelSelector } from "./PokemonV2MovemetaStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetaStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetaStddevSampFieldsModel = PokemonV2MovemetaStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
