import { Instance } from "mobx-state-tree"
import { PokemonV2LocationAggregateModelBase } from "./PokemonV2LocationAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationAggregateModel */
export interface PokemonV2LocationAggregateModelType extends Instance<typeof PokemonV2LocationAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationAggregateModel */
export { selectFromPokemonV2LocationAggregate, pokemonV2LocationAggregateModelPrimitives, PokemonV2LocationAggregateModelSelector } from "./PokemonV2LocationAggregateModel.base"

/**
 * PokemonV2LocationAggregateModel
 *
 * aggregated selection of "pokemon_v2_location"
 */
export const PokemonV2LocationAggregateModel = PokemonV2LocationAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
