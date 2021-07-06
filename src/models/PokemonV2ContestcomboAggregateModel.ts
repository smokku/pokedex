import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboAggregateModelBase } from "./PokemonV2ContestcomboAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboAggregateModel */
export interface PokemonV2ContestcomboAggregateModelType extends Instance<typeof PokemonV2ContestcomboAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboAggregateModel */
export { selectFromPokemonV2ContestcomboAggregate, pokemonV2ContestcomboAggregateModelPrimitives, PokemonV2ContestcomboAggregateModelSelector } from "./PokemonV2ContestcomboAggregateModel.base"

/**
 * PokemonV2ContestcomboAggregateModel
 *
 * aggregated selection of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboAggregateModel = PokemonV2ContestcomboAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
