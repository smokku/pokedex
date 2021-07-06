import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectAvgFieldsModelBase } from "./PokemonV2ContesteffectAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectAvgFieldsModel */
export interface PokemonV2ContesteffectAvgFieldsModelType extends Instance<typeof PokemonV2ContesteffectAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectAvgFieldsModel */
export { selectFromPokemonV2ContesteffectAvgFields, pokemonV2ContesteffectAvgFieldsModelPrimitives, PokemonV2ContesteffectAvgFieldsModelSelector } from "./PokemonV2ContesteffectAvgFieldsModel.base"

/**
 * PokemonV2ContesteffectAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContesteffectAvgFieldsModel = PokemonV2ContesteffectAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
