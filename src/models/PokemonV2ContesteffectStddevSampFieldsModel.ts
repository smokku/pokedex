import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectStddevSampFieldsModelBase } from "./PokemonV2ContesteffectStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectStddevSampFieldsModel */
export interface PokemonV2ContesteffectStddevSampFieldsModelType extends Instance<typeof PokemonV2ContesteffectStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectStddevSampFieldsModel */
export { selectFromPokemonV2ContesteffectStddevSampFields, pokemonV2ContesteffectStddevSampFieldsModelPrimitives, PokemonV2ContesteffectStddevSampFieldsModelSelector } from "./PokemonV2ContesteffectStddevSampFieldsModel.base"

/**
 * PokemonV2ContesteffectStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesteffectStddevSampFieldsModel = PokemonV2ContesteffectStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
