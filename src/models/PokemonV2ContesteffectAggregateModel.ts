import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectAggregateModelBase } from "./PokemonV2ContesteffectAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectAggregateModel */
export interface PokemonV2ContesteffectAggregateModelType extends Instance<typeof PokemonV2ContesteffectAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectAggregateModel */
export { selectFromPokemonV2ContesteffectAggregate, pokemonV2ContesteffectAggregateModelPrimitives, PokemonV2ContesteffectAggregateModelSelector } from "./PokemonV2ContesteffectAggregateModel.base"

/**
 * PokemonV2ContesteffectAggregateModel
 *
 * aggregated selection of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectAggregateModel = PokemonV2ContesteffectAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
