import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryAggregateModelBase } from "./PokemonV2ItemcategoryAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryAggregateModel */
export interface PokemonV2ItemcategoryAggregateModelType extends Instance<typeof PokemonV2ItemcategoryAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryAggregateModel */
export { selectFromPokemonV2ItemcategoryAggregate, pokemonV2ItemcategoryAggregateModelPrimitives, PokemonV2ItemcategoryAggregateModelSelector } from "./PokemonV2ItemcategoryAggregateModel.base"

/**
 * PokemonV2ItemcategoryAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemcategory"
 */
export const PokemonV2ItemcategoryAggregateModel = PokemonV2ItemcategoryAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
