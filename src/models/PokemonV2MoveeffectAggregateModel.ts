import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectAggregateModelBase } from "./PokemonV2MoveeffectAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectAggregateModel */
export interface PokemonV2MoveeffectAggregateModelType extends Instance<typeof PokemonV2MoveeffectAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectAggregateModel */
export { selectFromPokemonV2MoveeffectAggregate, pokemonV2MoveeffectAggregateModelPrimitives, PokemonV2MoveeffectAggregateModelSelector } from "./PokemonV2MoveeffectAggregateModel.base"

/**
 * PokemonV2MoveeffectAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectAggregateModel = PokemonV2MoveeffectAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
