import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityAggregateModelBase } from "./PokemonV2PokemonabilityAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityAggregateModel */
export interface PokemonV2PokemonabilityAggregateModelType extends Instance<typeof PokemonV2PokemonabilityAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityAggregateModel */
export { selectFromPokemonV2PokemonabilityAggregate, pokemonV2PokemonabilityAggregateModelPrimitives, PokemonV2PokemonabilityAggregateModelSelector } from "./PokemonV2PokemonabilityAggregateModel.base"

/**
 * PokemonV2PokemonabilityAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityAggregateModel = PokemonV2PokemonabilityAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
