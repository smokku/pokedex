import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryMinFieldsModelBase } from "./PokemonV2ItemcategoryMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryMinFieldsModel */
export interface PokemonV2ItemcategoryMinFieldsModelType extends Instance<typeof PokemonV2ItemcategoryMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryMinFieldsModel */
export { selectFromPokemonV2ItemcategoryMinFields, pokemonV2ItemcategoryMinFieldsModelPrimitives, PokemonV2ItemcategoryMinFieldsModelSelector } from "./PokemonV2ItemcategoryMinFieldsModel.base"

/**
 * PokemonV2ItemcategoryMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemcategoryMinFieldsModel = PokemonV2ItemcategoryMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
