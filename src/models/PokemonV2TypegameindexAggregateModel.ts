import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexAggregateModelBase } from "./PokemonV2TypegameindexAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexAggregateModel */
export interface PokemonV2TypegameindexAggregateModelType extends Instance<typeof PokemonV2TypegameindexAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexAggregateModel */
export { selectFromPokemonV2TypegameindexAggregate, pokemonV2TypegameindexAggregateModelPrimitives, PokemonV2TypegameindexAggregateModelSelector } from "./PokemonV2TypegameindexAggregateModel.base"

/**
 * PokemonV2TypegameindexAggregateModel
 *
 * aggregated selection of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexAggregateModel = PokemonV2TypegameindexAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
