import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesAggregateModelBase } from "./PokemonV2PokemonspritesAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesAggregateModel */
export interface PokemonV2PokemonspritesAggregateModelType extends Instance<typeof PokemonV2PokemonspritesAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesAggregateModel */
export { selectFromPokemonV2PokemonspritesAggregate, pokemonV2PokemonspritesAggregateModelPrimitives, PokemonV2PokemonspritesAggregateModelSelector } from "./PokemonV2PokemonspritesAggregateModel.base"

/**
 * PokemonV2PokemonspritesAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesAggregateModel = PokemonV2PokemonspritesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
