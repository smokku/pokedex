import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeAggregateModelBase } from "./PokemonV2MovechangeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeAggregateModel */
export interface PokemonV2MovechangeAggregateModelType extends Instance<typeof PokemonV2MovechangeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeAggregateModel */
export { selectFromPokemonV2MovechangeAggregate, pokemonV2MovechangeAggregateModelPrimitives, PokemonV2MovechangeAggregateModelSelector } from "./PokemonV2MovechangeAggregateModel.base"

/**
 * PokemonV2MovechangeAggregateModel
 *
 * aggregated selection of "pokemon_v2_movechange"
 */
export const PokemonV2MovechangeAggregateModel = PokemonV2MovechangeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
