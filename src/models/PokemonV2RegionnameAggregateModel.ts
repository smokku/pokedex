import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameAggregateModelBase } from "./PokemonV2RegionnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameAggregateModel */
export interface PokemonV2RegionnameAggregateModelType extends Instance<typeof PokemonV2RegionnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameAggregateModel */
export { selectFromPokemonV2RegionnameAggregate, pokemonV2RegionnameAggregateModelPrimitives, PokemonV2RegionnameAggregateModelSelector } from "./PokemonV2RegionnameAggregateModel.base"

/**
 * PokemonV2RegionnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameAggregateModel = PokemonV2RegionnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
