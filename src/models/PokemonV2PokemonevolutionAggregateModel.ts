import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionAggregateModelBase } from "./PokemonV2PokemonevolutionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionAggregateModel */
export interface PokemonV2PokemonevolutionAggregateModelType extends Instance<typeof PokemonV2PokemonevolutionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionAggregateModel */
export { selectFromPokemonV2PokemonevolutionAggregate, pokemonV2PokemonevolutionAggregateModelPrimitives, PokemonV2PokemonevolutionAggregateModelSelector } from "./PokemonV2PokemonevolutionAggregateModel.base"

/**
 * PokemonV2PokemonevolutionAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionAggregateModel = PokemonV2PokemonevolutionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
