import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextStddevSampFieldsModelBase } from "./PokemonV2ContesteffectflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextStddevSampFieldsModel */
export interface PokemonV2ContesteffectflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextStddevSampFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextStddevSampFields, pokemonV2ContesteffectflavortextStddevSampFieldsModelPrimitives, PokemonV2ContesteffectflavortextStddevSampFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesteffectflavortextStddevSampFieldsModel = PokemonV2ContesteffectflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
