import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextVarianceFieldsModelBase } from "./PokemonV2ContesteffectflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextVarianceFieldsModel */
export interface PokemonV2ContesteffectflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextVarianceFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextVarianceFields, pokemonV2ContesteffectflavortextVarianceFieldsModelPrimitives, PokemonV2ContesteffectflavortextVarianceFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarianceFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesteffectflavortextVarianceFieldsModel = PokemonV2ContesteffectflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
