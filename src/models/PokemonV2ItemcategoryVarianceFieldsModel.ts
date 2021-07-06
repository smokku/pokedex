import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryVarianceFieldsModelBase } from "./PokemonV2ItemcategoryVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryVarianceFieldsModel */
export interface PokemonV2ItemcategoryVarianceFieldsModelType extends Instance<typeof PokemonV2ItemcategoryVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryVarianceFieldsModel */
export { selectFromPokemonV2ItemcategoryVarianceFields, pokemonV2ItemcategoryVarianceFieldsModelPrimitives, PokemonV2ItemcategoryVarianceFieldsModelSelector } from "./PokemonV2ItemcategoryVarianceFieldsModel.base"

/**
 * PokemonV2ItemcategoryVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemcategoryVarianceFieldsModel = PokemonV2ItemcategoryVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
