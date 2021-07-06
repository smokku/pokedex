import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyAggregateModelBase } from "./PokemonV2TypeefficacyAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyAggregateModel */
export interface PokemonV2TypeefficacyAggregateModelType extends Instance<typeof PokemonV2TypeefficacyAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyAggregateModel */
export { selectFromPokemonV2TypeefficacyAggregate, pokemonV2TypeefficacyAggregateModelPrimitives, PokemonV2TypeefficacyAggregateModelSelector } from "./PokemonV2TypeefficacyAggregateModel.base"

/**
 * PokemonV2TypeefficacyAggregateModel
 *
 * aggregated selection of "pokemon_v2_typeefficacy"
 */
export const PokemonV2TypeefficacyAggregateModel = PokemonV2TypeefficacyAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
