import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodStddevSampFieldsModelBase } from "./PokemonV2EncountermethodStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodStddevSampFieldsModel */
export interface PokemonV2EncountermethodStddevSampFieldsModelType extends Instance<typeof PokemonV2EncountermethodStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodStddevSampFieldsModel */
export { selectFromPokemonV2EncountermethodStddevSampFields, pokemonV2EncountermethodStddevSampFieldsModelPrimitives, PokemonV2EncountermethodStddevSampFieldsModelSelector } from "./PokemonV2EncountermethodStddevSampFieldsModel.base"

/**
 * PokemonV2EncountermethodStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncountermethodStddevSampFieldsModel = PokemonV2EncountermethodStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
