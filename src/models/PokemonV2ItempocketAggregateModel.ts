import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketAggregateModelBase } from "./PokemonV2ItempocketAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketAggregateModel */
export interface PokemonV2ItempocketAggregateModelType extends Instance<typeof PokemonV2ItempocketAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketAggregateModel */
export { selectFromPokemonV2ItempocketAggregate, pokemonV2ItempocketAggregateModelPrimitives, PokemonV2ItempocketAggregateModelSelector } from "./PokemonV2ItempocketAggregateModel.base"

/**
 * PokemonV2ItempocketAggregateModel
 *
 * aggregated selection of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketAggregateModel = PokemonV2ItempocketAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
