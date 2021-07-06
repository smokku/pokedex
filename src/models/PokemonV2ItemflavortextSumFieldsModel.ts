import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextSumFieldsModelBase } from "./PokemonV2ItemflavortextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextSumFieldsModel */
export interface PokemonV2ItemflavortextSumFieldsModelType extends Instance<typeof PokemonV2ItemflavortextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextSumFieldsModel */
export { selectFromPokemonV2ItemflavortextSumFields, pokemonV2ItemflavortextSumFieldsModelPrimitives, PokemonV2ItemflavortextSumFieldsModelSelector } from "./PokemonV2ItemflavortextSumFieldsModel.base"

/**
 * PokemonV2ItemflavortextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemflavortextSumFieldsModel = PokemonV2ItemflavortextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
