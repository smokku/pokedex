import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorySumFieldsModelBase } from "./PokemonV2ItemcategorySumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorySumFieldsModel */
export interface PokemonV2ItemcategorySumFieldsModelType extends Instance<typeof PokemonV2ItemcategorySumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorySumFieldsModel */
export { selectFromPokemonV2ItemcategorySumFields, pokemonV2ItemcategorySumFieldsModelPrimitives, PokemonV2ItemcategorySumFieldsModelSelector } from "./PokemonV2ItemcategorySumFieldsModel.base"

/**
 * PokemonV2ItemcategorySumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemcategorySumFieldsModel = PokemonV2ItemcategorySumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
