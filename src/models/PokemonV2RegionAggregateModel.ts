import { Instance } from "mobx-state-tree"
import { PokemonV2RegionAggregateModelBase } from "./PokemonV2RegionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2RegionAggregateModel */
export interface PokemonV2RegionAggregateModelType extends Instance<typeof PokemonV2RegionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionAggregateModel */
export { selectFromPokemonV2RegionAggregate, pokemonV2RegionAggregateModelPrimitives, PokemonV2RegionAggregateModelSelector } from "./PokemonV2RegionAggregateModel.base"

/**
 * PokemonV2RegionAggregateModel
 *
 * aggregated selection of "pokemon_v2_region"
 */
export const PokemonV2RegionAggregateModel = PokemonV2RegionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
