import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeAggregateModelBase } from "./PokemonV2MoveattributeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeAggregateModel */
export interface PokemonV2MoveattributeAggregateModelType extends Instance<typeof PokemonV2MoveattributeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeAggregateModel */
export { selectFromPokemonV2MoveattributeAggregate, pokemonV2MoveattributeAggregateModelPrimitives, PokemonV2MoveattributeAggregateModelSelector } from "./PokemonV2MoveattributeAggregateModel.base"

/**
 * PokemonV2MoveattributeAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeAggregateModel = PokemonV2MoveattributeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
