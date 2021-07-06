import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameAggregateModelBase } from "./PokemonV2ItemcategorynameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameAggregateModel */
export interface PokemonV2ItemcategorynameAggregateModelType extends Instance<typeof PokemonV2ItemcategorynameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameAggregateModel */
export { selectFromPokemonV2ItemcategorynameAggregate, pokemonV2ItemcategorynameAggregateModelPrimitives, PokemonV2ItemcategorynameAggregateModelSelector } from "./PokemonV2ItemcategorynameAggregateModel.base"

/**
 * PokemonV2ItemcategorynameAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameAggregateModel = PokemonV2ItemcategorynameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
