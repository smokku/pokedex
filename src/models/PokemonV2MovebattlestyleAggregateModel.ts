import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleAggregateModelBase } from "./PokemonV2MovebattlestyleAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleAggregateModel */
export interface PokemonV2MovebattlestyleAggregateModelType extends Instance<typeof PokemonV2MovebattlestyleAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleAggregateModel */
export { selectFromPokemonV2MovebattlestyleAggregate, pokemonV2MovebattlestyleAggregateModelPrimitives, PokemonV2MovebattlestyleAggregateModelSelector } from "./PokemonV2MovebattlestyleAggregateModel.base"

/**
 * PokemonV2MovebattlestyleAggregateModel
 *
 * aggregated selection of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleAggregateModel = PokemonV2MovebattlestyleAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
