import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentAggregateModelBase } from "./PokemonV2MovemetaailmentAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentAggregateModel */
export interface PokemonV2MovemetaailmentAggregateModelType extends Instance<typeof PokemonV2MovemetaailmentAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentAggregateModel */
export { selectFromPokemonV2MovemetaailmentAggregate, pokemonV2MovemetaailmentAggregateModelPrimitives, PokemonV2MovemetaailmentAggregateModelSelector } from "./PokemonV2MovemetaailmentAggregateModel.base"

/**
 * PokemonV2MovemetaailmentAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentAggregateModel = PokemonV2MovemetaailmentAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
