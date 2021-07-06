import { Instance } from "mobx-state-tree"
import { PokemonV2TypeSumFieldsModelBase } from "./PokemonV2TypeSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeSumFieldsModel */
export interface PokemonV2TypeSumFieldsModelType extends Instance<typeof PokemonV2TypeSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeSumFieldsModel */
export { selectFromPokemonV2TypeSumFields, pokemonV2TypeSumFieldsModelPrimitives, PokemonV2TypeSumFieldsModelSelector } from "./PokemonV2TypeSumFieldsModel.base"

/**
 * PokemonV2TypeSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2TypeSumFieldsModel = PokemonV2TypeSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
