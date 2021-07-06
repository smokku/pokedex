import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryAggregateFieldsModelBase } from "./PokemonV2ItemcategoryAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryAggregateFieldsModel */
export interface PokemonV2ItemcategoryAggregateFieldsModelType extends Instance<typeof PokemonV2ItemcategoryAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryAggregateFieldsModel */
export { selectFromPokemonV2ItemcategoryAggregateFields, pokemonV2ItemcategoryAggregateFieldsModelPrimitives, PokemonV2ItemcategoryAggregateFieldsModelSelector } from "./PokemonV2ItemcategoryAggregateFieldsModel.base"

/**
 * PokemonV2ItemcategoryAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryAggregateFieldsModel = PokemonV2ItemcategoryAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
