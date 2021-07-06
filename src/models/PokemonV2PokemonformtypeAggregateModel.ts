import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeAggregateModelBase } from "./PokemonV2PokemonformtypeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeAggregateModel */
export interface PokemonV2PokemonformtypeAggregateModelType extends Instance<typeof PokemonV2PokemonformtypeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeAggregateModel */
export { selectFromPokemonV2PokemonformtypeAggregate, pokemonV2PokemonformtypeAggregateModelPrimitives, PokemonV2PokemonformtypeAggregateModelSelector } from "./PokemonV2PokemonformtypeAggregateModel.base"

/**
 * PokemonV2PokemonformtypeAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeAggregateModel = PokemonV2PokemonformtypeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
