import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectVarianceFieldsModelBase } from "./PokemonV2ContesteffectVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectVarianceFieldsModel */
export interface PokemonV2ContesteffectVarianceFieldsModelType extends Instance<typeof PokemonV2ContesteffectVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectVarianceFieldsModel */
export { selectFromPokemonV2ContesteffectVarianceFields, pokemonV2ContesteffectVarianceFieldsModelPrimitives, PokemonV2ContesteffectVarianceFieldsModelSelector } from "./PokemonV2ContesteffectVarianceFieldsModel.base"

/**
 * PokemonV2ContesteffectVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesteffectVarianceFieldsModel = PokemonV2ContesteffectVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
