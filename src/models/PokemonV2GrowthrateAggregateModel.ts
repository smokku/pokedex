import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateAggregateModelBase } from "./PokemonV2GrowthrateAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateAggregateModel */
export interface PokemonV2GrowthrateAggregateModelType extends Instance<typeof PokemonV2GrowthrateAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateAggregateModel */
export { selectFromPokemonV2GrowthrateAggregate, pokemonV2GrowthrateAggregateModelPrimitives, PokemonV2GrowthrateAggregateModelSelector } from "./PokemonV2GrowthrateAggregateModel.base"

/**
 * PokemonV2GrowthrateAggregateModel
 *
 * aggregated selection of "pokemon_v2_growthrate"
 */
export const PokemonV2GrowthrateAggregateModel = PokemonV2GrowthrateAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
