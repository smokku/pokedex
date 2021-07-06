import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveAggregateModelBase } from "./PokemonV2PokemonmoveAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveAggregateModel */
export interface PokemonV2PokemonmoveAggregateModelType extends Instance<typeof PokemonV2PokemonmoveAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveAggregateModel */
export { selectFromPokemonV2PokemonmoveAggregate, pokemonV2PokemonmoveAggregateModelPrimitives, PokemonV2PokemonmoveAggregateModelSelector } from "./PokemonV2PokemonmoveAggregateModel.base"

/**
 * PokemonV2PokemonmoveAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveAggregateModel = PokemonV2PokemonmoveAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
