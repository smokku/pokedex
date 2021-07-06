import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextAggregateModelBase } from "./PokemonV2ContesteffectflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextAggregateModel */
export interface PokemonV2ContesteffectflavortextAggregateModelType extends Instance<typeof PokemonV2ContesteffectflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextAggregateModel */
export { selectFromPokemonV2ContesteffectflavortextAggregate, pokemonV2ContesteffectflavortextAggregateModelPrimitives, PokemonV2ContesteffectflavortextAggregateModelSelector } from "./PokemonV2ContesteffectflavortextAggregateModel.base"

/**
 * PokemonV2ContesteffectflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_contesteffectflavortext"
 */
export const PokemonV2ContesteffectflavortextAggregateModel = PokemonV2ContesteffectflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
