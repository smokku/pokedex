import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationAggregateModelBase } from "./PokemonV2PokemonformgenerationAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationAggregateModel */
export interface PokemonV2PokemonformgenerationAggregateModelType extends Instance<typeof PokemonV2PokemonformgenerationAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationAggregateModel */
export { selectFromPokemonV2PokemonformgenerationAggregate, pokemonV2PokemonformgenerationAggregateModelPrimitives, PokemonV2PokemonformgenerationAggregateModelSelector } from "./PokemonV2PokemonformgenerationAggregateModel.base"

/**
 * PokemonV2PokemonformgenerationAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationAggregateModel = PokemonV2PokemonformgenerationAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
