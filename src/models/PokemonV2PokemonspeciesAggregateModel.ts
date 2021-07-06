import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesAggregateModelBase } from "./PokemonV2PokemonspeciesAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesAggregateModel */
export interface PokemonV2PokemonspeciesAggregateModelType extends Instance<typeof PokemonV2PokemonspeciesAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesAggregateModel */
export { selectFromPokemonV2PokemonspeciesAggregate, pokemonV2PokemonspeciesAggregateModelPrimitives, PokemonV2PokemonspeciesAggregateModelSelector } from "./PokemonV2PokemonspeciesAggregateModel.base"

/**
 * PokemonV2PokemonspeciesAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesAggregateModel = PokemonV2PokemonspeciesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
