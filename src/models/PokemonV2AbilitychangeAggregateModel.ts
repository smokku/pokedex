import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeAggregateModelBase } from "./PokemonV2AbilitychangeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeAggregateModel */
export interface PokemonV2AbilitychangeAggregateModelType extends Instance<typeof PokemonV2AbilitychangeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeAggregateModel */
export { selectFromPokemonV2AbilitychangeAggregate, pokemonV2AbilitychangeAggregateModelPrimitives, PokemonV2AbilitychangeAggregateModelSelector } from "./PokemonV2AbilitychangeAggregateModel.base"

/**
 * PokemonV2AbilitychangeAggregateModel
 *
 * aggregated selection of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeAggregateModel = PokemonV2AbilitychangeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
