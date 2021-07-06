import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboAvgFieldsModelBase } from "./PokemonV2ContestcomboAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboAvgFieldsModel */
export interface PokemonV2ContestcomboAvgFieldsModelType extends Instance<typeof PokemonV2ContestcomboAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboAvgFieldsModel */
export { selectFromPokemonV2ContestcomboAvgFields, pokemonV2ContestcomboAvgFieldsModelPrimitives, PokemonV2ContestcomboAvgFieldsModelSelector } from "./PokemonV2ContestcomboAvgFieldsModel.base"

/**
 * PokemonV2ContestcomboAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ContestcomboAvgFieldsModel = PokemonV2ContestcomboAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
