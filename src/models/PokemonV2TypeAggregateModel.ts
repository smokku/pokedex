import { Instance } from "mobx-state-tree"
import { PokemonV2TypeAggregateModelBase } from "./PokemonV2TypeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2TypeAggregateModel */
export interface PokemonV2TypeAggregateModelType extends Instance<typeof PokemonV2TypeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeAggregateModel */
export { selectFromPokemonV2TypeAggregate, pokemonV2TypeAggregateModelPrimitives, PokemonV2TypeAggregateModelSelector } from "./PokemonV2TypeAggregateModel.base"

/**
 * PokemonV2TypeAggregateModel
 *
 * aggregated selection of "pokemon_v2_type"
 */
export const PokemonV2TypeAggregateModel = PokemonV2TypeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
