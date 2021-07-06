import { Instance } from "mobx-state-tree"
import { PokemonV2MoveAggregateModelBase } from "./PokemonV2MoveAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveAggregateModel */
export interface PokemonV2MoveAggregateModelType extends Instance<typeof PokemonV2MoveAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveAggregateModel */
export { selectFromPokemonV2MoveAggregate, pokemonV2MoveAggregateModelPrimitives, PokemonV2MoveAggregateModelSelector } from "./PokemonV2MoveAggregateModel.base"

/**
 * PokemonV2MoveAggregateModel
 *
 * aggregated selection of "pokemon_v2_move"
 */
export const PokemonV2MoveAggregateModel = PokemonV2MoveAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
