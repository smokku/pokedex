import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemAggregateModelBase } from "./PokemonV2PokemonitemAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemAggregateModel */
export interface PokemonV2PokemonitemAggregateModelType extends Instance<typeof PokemonV2PokemonitemAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemAggregateModel */
export { selectFromPokemonV2PokemonitemAggregate, pokemonV2PokemonitemAggregateModelPrimitives, PokemonV2PokemonitemAggregateModelSelector } from "./PokemonV2PokemonitemAggregateModel.base"

/**
 * PokemonV2PokemonitemAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemAggregateModel = PokemonV2PokemonitemAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
