import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatAggregateModelBase } from "./PokemonV2PokemonstatAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatAggregateModel */
export interface PokemonV2PokemonstatAggregateModelType extends Instance<typeof PokemonV2PokemonstatAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatAggregateModel */
export { selectFromPokemonV2PokemonstatAggregate, pokemonV2PokemonstatAggregateModelPrimitives, PokemonV2PokemonstatAggregateModelSelector } from "./PokemonV2PokemonstatAggregateModel.base"

/**
 * PokemonV2PokemonstatAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonstat"
 */
export const PokemonV2PokemonstatAggregateModel = PokemonV2PokemonstatAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
