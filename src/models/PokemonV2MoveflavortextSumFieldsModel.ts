import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextSumFieldsModelBase } from "./PokemonV2MoveflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextSumFieldsModel */
export interface PokemonV2MoveflavortextSumFieldsModelType extends Instance<typeof PokemonV2MoveflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextSumFieldsModel */
export { selectFromPokemonV2MoveflavortextSumFields, pokemonV2MoveflavortextSumFieldsModelPrimitives, PokemonV2MoveflavortextSumFieldsModelSelector } from "./PokemonV2MoveflavortextSumFieldsModel.base"

/**
 * PokemonV2MoveflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveflavortextSumFieldsModel = PokemonV2MoveflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
