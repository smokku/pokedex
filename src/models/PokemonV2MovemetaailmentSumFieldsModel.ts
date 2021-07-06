import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentSumFieldsModelBase } from "./PokemonV2MovemetaailmentSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentSumFieldsModel */
export interface PokemonV2MovemetaailmentSumFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentSumFieldsModel */
export { selectFromPokemonV2MovemetaailmentSumFields, pokemonV2MovemetaailmentSumFieldsModelPrimitives, PokemonV2MovemetaailmentSumFieldsModelSelector } from "./PokemonV2MovemetaailmentSumFieldsModel.base"

/**
 * PokemonV2MovemetaailmentSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetaailmentSumFieldsModel = PokemonV2MovemetaailmentSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
