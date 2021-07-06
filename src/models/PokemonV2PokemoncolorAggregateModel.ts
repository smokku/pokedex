import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorAggregateModelBase } from "./PokemonV2PokemoncolorAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorAggregateModel */
export interface PokemonV2PokemoncolorAggregateModelType extends Instance<typeof PokemonV2PokemoncolorAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorAggregateModel */
export { selectFromPokemonV2PokemoncolorAggregate, pokemonV2PokemoncolorAggregateModelPrimitives, PokemonV2PokemoncolorAggregateModelSelector } from "./PokemonV2PokemoncolorAggregateModel.base"

/**
 * PokemonV2PokemoncolorAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorAggregateModel = PokemonV2PokemoncolorAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
