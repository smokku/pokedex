import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeAggregateModelBase } from "./PokemonV2MoveeffectchangeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeAggregateModel */
export interface PokemonV2MoveeffectchangeAggregateModelType extends Instance<typeof PokemonV2MoveeffectchangeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeAggregateModel */
export { selectFromPokemonV2MoveeffectchangeAggregate, pokemonV2MoveeffectchangeAggregateModelPrimitives, PokemonV2MoveeffectchangeAggregateModelSelector } from "./PokemonV2MoveeffectchangeAggregateModel.base"

/**
 * PokemonV2MoveeffectchangeAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeAggregateModel = PokemonV2MoveeffectchangeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
