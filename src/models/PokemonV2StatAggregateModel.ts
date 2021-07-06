import { Instance } from "mobx-state-tree"
import { PokemonV2StatAggregateModelBase } from "./PokemonV2StatAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2StatAggregateModel */
export interface PokemonV2StatAggregateModelType extends Instance<typeof PokemonV2StatAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatAggregateModel */
export { selectFromPokemonV2StatAggregate, pokemonV2StatAggregateModelPrimitives, PokemonV2StatAggregateModelSelector } from "./PokemonV2StatAggregateModel.base"

/**
 * PokemonV2StatAggregateModel
 *
 * aggregated selection of "pokemon_v2_stat"
 */
export const PokemonV2StatAggregateModel = PokemonV2StatAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
