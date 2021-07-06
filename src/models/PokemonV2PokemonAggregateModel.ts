import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonAggregateModelBase } from "./PokemonV2PokemonAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonAggregateModel */
export interface PokemonV2PokemonAggregateModelType extends Instance<typeof PokemonV2PokemonAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonAggregateModel */
export { selectFromPokemonV2PokemonAggregate, pokemonV2PokemonAggregateModelPrimitives, PokemonV2PokemonAggregateModelSelector } from "./PokemonV2PokemonAggregateModel.base"

/**
 * PokemonV2PokemonAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonAggregateModel = PokemonV2PokemonAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
