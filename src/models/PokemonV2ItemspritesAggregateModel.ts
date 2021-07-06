import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesAggregateModelBase } from "./PokemonV2ItemspritesAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesAggregateModel */
export interface PokemonV2ItemspritesAggregateModelType extends Instance<typeof PokemonV2ItemspritesAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesAggregateModel */
export { selectFromPokemonV2ItemspritesAggregate, pokemonV2ItemspritesAggregateModelPrimitives, PokemonV2ItemspritesAggregateModelSelector } from "./PokemonV2ItemspritesAggregateModel.base"

/**
 * PokemonV2ItemspritesAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesAggregateModel = PokemonV2ItemspritesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
