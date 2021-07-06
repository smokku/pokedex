import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkSumFieldsModelBase } from "./PokemonV2PalparkSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkSumFieldsModel */
export interface PokemonV2PalparkSumFieldsModelType extends Instance<typeof PokemonV2PalparkSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkSumFieldsModel */
export { selectFromPokemonV2PalparkSumFields, pokemonV2PalparkSumFieldsModelPrimitives, PokemonV2PalparkSumFieldsModelSelector } from "./PokemonV2PalparkSumFieldsModel.base"

/**
 * PokemonV2PalparkSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PalparkSumFieldsModel = PokemonV2PalparkSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
