import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkAggregateModelBase } from "./PokemonV2PalparkAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkAggregateModel */
export interface PokemonV2PalparkAggregateModelType extends Instance<typeof PokemonV2PalparkAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkAggregateModel */
export { selectFromPokemonV2PalparkAggregate, pokemonV2PalparkAggregateModelPrimitives, PokemonV2PalparkAggregateModelSelector } from "./PokemonV2PalparkAggregateModel.base"

/**
 * PokemonV2PalparkAggregateModel
 *
 * aggregated selection of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkAggregateModel = PokemonV2PalparkAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
