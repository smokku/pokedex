import { Instance } from "mobx-state-tree"
import { PokemonV2StatSumFieldsModelBase } from "./PokemonV2StatSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatSumFieldsModel */
export interface PokemonV2StatSumFieldsModelType extends Instance<typeof PokemonV2StatSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatSumFieldsModel */
export { selectFromPokemonV2StatSumFields, pokemonV2StatSumFieldsModelPrimitives, PokemonV2StatSumFieldsModelSelector } from "./PokemonV2StatSumFieldsModel.base"

/**
 * PokemonV2StatSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2StatSumFieldsModel = PokemonV2StatSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
