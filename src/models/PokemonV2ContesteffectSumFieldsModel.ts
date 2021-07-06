import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectSumFieldsModelBase } from "./PokemonV2ContesteffectSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectSumFieldsModel */
export interface PokemonV2ContesteffectSumFieldsModelType extends Instance<typeof PokemonV2ContesteffectSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectSumFieldsModel */
export { selectFromPokemonV2ContesteffectSumFields, pokemonV2ContesteffectSumFieldsModelPrimitives, PokemonV2ContesteffectSumFieldsModelSelector } from "./PokemonV2ContesteffectSumFieldsModel.base"

/**
 * PokemonV2ContesteffectSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContesteffectSumFieldsModel = PokemonV2ContesteffectSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
