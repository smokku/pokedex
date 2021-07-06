import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboVarianceFieldsModelBase } from "./PokemonV2ContestcomboVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboVarianceFieldsModel */
export interface PokemonV2ContestcomboVarianceFieldsModelType extends Instance<typeof PokemonV2ContestcomboVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboVarianceFieldsModel */
export { selectFromPokemonV2ContestcomboVarianceFields, pokemonV2ContestcomboVarianceFieldsModelPrimitives, PokemonV2ContestcomboVarianceFieldsModelSelector } from "./PokemonV2ContestcomboVarianceFieldsModel.base"

/**
 * PokemonV2ContestcomboVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContestcomboVarianceFieldsModel = PokemonV2ContestcomboVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
