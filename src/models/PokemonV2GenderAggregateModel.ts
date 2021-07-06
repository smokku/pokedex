import { Instance } from "mobx-state-tree"
import { PokemonV2GenderAggregateModelBase } from "./PokemonV2GenderAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2GenderAggregateModel */
export interface PokemonV2GenderAggregateModelType extends Instance<typeof PokemonV2GenderAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderAggregateModel */
export { selectFromPokemonV2GenderAggregate, pokemonV2GenderAggregateModelPrimitives, PokemonV2GenderAggregateModelSelector } from "./PokemonV2GenderAggregateModel.base"

/**
 * PokemonV2GenderAggregateModel
 *
 * aggregated selection of "pokemon_v2_gender"
 */
export const PokemonV2GenderAggregateModel = PokemonV2GenderAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
