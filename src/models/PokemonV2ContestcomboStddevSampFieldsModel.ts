import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboStddevSampFieldsModelBase } from "./PokemonV2ContestcomboStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboStddevSampFieldsModel */
export interface PokemonV2ContestcomboStddevSampFieldsModelType extends Instance<typeof PokemonV2ContestcomboStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboStddevSampFieldsModel */
export { selectFromPokemonV2ContestcomboStddevSampFields, pokemonV2ContestcomboStddevSampFieldsModelPrimitives, PokemonV2ContestcomboStddevSampFieldsModelSelector } from "./PokemonV2ContestcomboStddevSampFieldsModel.base"

/**
 * PokemonV2ContestcomboStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContestcomboStddevSampFieldsModel = PokemonV2ContestcomboStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
