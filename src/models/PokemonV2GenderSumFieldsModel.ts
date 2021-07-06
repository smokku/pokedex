import { Instance } from "mobx-state-tree"
import { PokemonV2GenderSumFieldsModelBase } from "./PokemonV2GenderSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderSumFieldsModel */
export interface PokemonV2GenderSumFieldsModelType extends Instance<typeof PokemonV2GenderSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderSumFieldsModel */
export { selectFromPokemonV2GenderSumFields, pokemonV2GenderSumFieldsModelPrimitives, PokemonV2GenderSumFieldsModelSelector } from "./PokemonV2GenderSumFieldsModel.base"

/**
 * PokemonV2GenderSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2GenderSumFieldsModel = PokemonV2GenderSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
