import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexAggregateModelBase } from "./PokemonV2ItemgameindexAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexAggregateModel */
export interface PokemonV2ItemgameindexAggregateModelType extends Instance<typeof PokemonV2ItemgameindexAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexAggregateModel */
export { selectFromPokemonV2ItemgameindexAggregate, pokemonV2ItemgameindexAggregateModelPrimitives, PokemonV2ItemgameindexAggregateModelSelector } from "./PokemonV2ItemgameindexAggregateModel.base"

/**
 * PokemonV2ItemgameindexAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexAggregateModel = PokemonV2ItemgameindexAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
