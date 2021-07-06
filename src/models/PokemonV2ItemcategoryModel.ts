import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryModelBase } from "./PokemonV2ItemcategoryModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryModel */
export interface PokemonV2ItemcategoryModelType extends Instance<typeof PokemonV2ItemcategoryModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryModel */
export { selectFromPokemonV2Itemcategory, pokemonV2ItemcategoryModelPrimitives, PokemonV2ItemcategoryModelSelector } from "./PokemonV2ItemcategoryModel.base"

/**
 * PokemonV2ItemcategoryModel
 *
 * columns and relationships of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryModel = PokemonV2ItemcategoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
