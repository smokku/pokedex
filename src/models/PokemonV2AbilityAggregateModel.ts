import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityAggregateModelBase } from "./PokemonV2AbilityAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityAggregateModel */
export interface PokemonV2AbilityAggregateModelType extends Instance<typeof PokemonV2AbilityAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityAggregateModel */
export { selectFromPokemonV2AbilityAggregate, pokemonV2AbilityAggregateModelPrimitives, PokemonV2AbilityAggregateModelSelector } from "./PokemonV2AbilityAggregateModel.base"

/**
 * PokemonV2AbilityAggregateModel
 *
 * aggregated selection of "pokemon_v2_ability"
 */
export const PokemonV2AbilityAggregateModel = PokemonV2AbilityAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
