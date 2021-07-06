import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationAggregateModelBase } from "./PokemonV2GenerationAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationAggregateModel */
export interface PokemonV2GenerationAggregateModelType extends Instance<typeof PokemonV2GenerationAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationAggregateModel */
export { selectFromPokemonV2GenerationAggregate, pokemonV2GenerationAggregateModelPrimitives, PokemonV2GenerationAggregateModelSelector } from "./PokemonV2GenerationAggregateModel.base"

/**
 * PokemonV2GenerationAggregateModel
 *
 * aggregated selection of "pokemon_v2_generation"
 */
export const PokemonV2GenerationAggregateModel = PokemonV2GenerationAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
