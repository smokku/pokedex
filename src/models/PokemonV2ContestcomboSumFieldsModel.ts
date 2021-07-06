import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboSumFieldsModelBase } from "./PokemonV2ContestcomboSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboSumFieldsModel */
export interface PokemonV2ContestcomboSumFieldsModelType extends Instance<typeof PokemonV2ContestcomboSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboSumFieldsModel */
export { selectFromPokemonV2ContestcomboSumFields, pokemonV2ContestcomboSumFieldsModelPrimitives, PokemonV2ContestcomboSumFieldsModelSelector } from "./PokemonV2ContestcomboSumFieldsModel.base"

/**
 * PokemonV2ContestcomboSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ContestcomboSumFieldsModel = PokemonV2ContestcomboSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
