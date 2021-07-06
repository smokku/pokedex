import { Instance } from "mobx-state-tree"
import { PokemonV2ItemSumFieldsModelBase } from "./PokemonV2ItemSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemSumFieldsModel */
export interface PokemonV2ItemSumFieldsModelType extends Instance<typeof PokemonV2ItemSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemSumFieldsModel */
export { selectFromPokemonV2ItemSumFields, pokemonV2ItemSumFieldsModelPrimitives, PokemonV2ItemSumFieldsModelSelector } from "./PokemonV2ItemSumFieldsModel.base"

/**
 * PokemonV2ItemSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemSumFieldsModel = PokemonV2ItemSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
