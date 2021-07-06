import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformAggregateModelBase } from "./PokemonV2PokemonformAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformAggregateModel */
export interface PokemonV2PokemonformAggregateModelType extends Instance<typeof PokemonV2PokemonformAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformAggregateModel */
export { selectFromPokemonV2PokemonformAggregate, pokemonV2PokemonformAggregateModelPrimitives, PokemonV2PokemonformAggregateModelSelector } from "./PokemonV2PokemonformAggregateModel.base"

/**
 * PokemonV2PokemonformAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonform"
 */
export const PokemonV2PokemonformAggregateModel = PokemonV2PokemonformAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
