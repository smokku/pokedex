import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorSumFieldsModelBase } from "./PokemonV2PokemoncolorSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorSumFieldsModel */
export interface PokemonV2PokemoncolorSumFieldsModelType extends Instance<typeof PokemonV2PokemoncolorSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorSumFieldsModel */
export { selectFromPokemonV2PokemoncolorSumFields, pokemonV2PokemoncolorSumFieldsModelPrimitives, PokemonV2PokemoncolorSumFieldsModelSelector } from "./PokemonV2PokemoncolorSumFieldsModel.base"

/**
 * PokemonV2PokemoncolorSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemoncolorSumFieldsModel = PokemonV2PokemoncolorSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
