import { Instance } from "mobx-state-tree"
import { PokemonV2ItemAggregateModelBase } from "./PokemonV2ItemAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemAggregateModel */
export interface PokemonV2ItemAggregateModelType extends Instance<typeof PokemonV2ItemAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemAggregateModel */
export { selectFromPokemonV2ItemAggregate, pokemonV2ItemAggregateModelPrimitives, PokemonV2ItemAggregateModelSelector } from "./PokemonV2ItemAggregateModel.base"

/**
 * PokemonV2ItemAggregateModel
 *
 * aggregated selection of "pokemon_v2_item"
 */
export const PokemonV2ItemAggregateModel = PokemonV2ItemAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
