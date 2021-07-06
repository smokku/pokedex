import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameAggregateModelBase } from "./PokemonV2MovebattlestylenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameAggregateModel */
export interface PokemonV2MovebattlestylenameAggregateModelType extends Instance<typeof PokemonV2MovebattlestylenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameAggregateModel */
export { selectFromPokemonV2MovebattlestylenameAggregate, pokemonV2MovebattlestylenameAggregateModelPrimitives, PokemonV2MovebattlestylenameAggregateModelSelector } from "./PokemonV2MovebattlestylenameAggregateModel.base"

/**
 * PokemonV2MovebattlestylenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movebattlestylename"
 */
export const PokemonV2MovebattlestylenameAggregateModel = PokemonV2MovebattlestylenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
