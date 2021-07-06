import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextAvgFieldsModelBase } from "./PokemonV2ContesteffectflavortextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextAvgFieldsModel */
export interface PokemonV2ContesteffectflavortextAvgFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextAvgFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextAvgFields, pokemonV2ContesteffectflavortextAvgFieldsModelPrimitives, PokemonV2ContesteffectflavortextAvgFieldsModelSelector } from "./PokemonV2ContesteffectflavortextAvgFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesteffectflavortextAvgFieldsModel = PokemonV2ContesteffectflavortextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
