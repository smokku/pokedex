import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexAggregateModelBase } from "./PokemonV2LocationgameindexAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexAggregateModel */
export interface PokemonV2LocationgameindexAggregateModelType extends Instance<typeof PokemonV2LocationgameindexAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexAggregateModel */
export { selectFromPokemonV2LocationgameindexAggregate, pokemonV2LocationgameindexAggregateModelPrimitives, PokemonV2LocationgameindexAggregateModelSelector } from "./PokemonV2LocationgameindexAggregateModel.base"

/**
 * PokemonV2LocationgameindexAggregateModel
 *
 * aggregated selection of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexAggregateModel = PokemonV2LocationgameindexAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
