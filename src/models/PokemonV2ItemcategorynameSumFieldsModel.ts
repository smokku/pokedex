import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameSumFieldsModelBase } from "./PokemonV2ItemcategorynameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameSumFieldsModel */
export interface PokemonV2ItemcategorynameSumFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameSumFieldsModel */
export { selectFromPokemonV2ItemcategorynameSumFields, pokemonV2ItemcategorynameSumFieldsModelPrimitives, PokemonV2ItemcategorynameSumFieldsModelSelector } from "./PokemonV2ItemcategorynameSumFieldsModel.base"

/**
 * PokemonV2ItemcategorynameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemcategorynameSumFieldsModel = PokemonV2ItemcategorynameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
