import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextAggregateModelBase } from "./PokemonV2AbilityflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextAggregateModel */
export interface PokemonV2AbilityflavortextAggregateModelType extends Instance<typeof PokemonV2AbilityflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextAggregateModel */
export { selectFromPokemonV2AbilityflavortextAggregate, pokemonV2AbilityflavortextAggregateModelPrimitives, PokemonV2AbilityflavortextAggregateModelSelector } from "./PokemonV2AbilityflavortextAggregateModel.base"

/**
 * PokemonV2AbilityflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextAggregateModel = PokemonV2AbilityflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
