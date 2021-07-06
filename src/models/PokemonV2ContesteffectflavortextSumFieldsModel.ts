import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextSumFieldsModelBase } from "./PokemonV2ContesteffectflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextSumFieldsModel */
export interface PokemonV2ContesteffectflavortextSumFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextSumFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextSumFields, pokemonV2ContesteffectflavortextSumFieldsModelPrimitives, PokemonV2ContesteffectflavortextSumFieldsModelSelector } from "./PokemonV2ContesteffectflavortextSumFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesteffectflavortextSumFieldsModel = PokemonV2ContesteffectflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
