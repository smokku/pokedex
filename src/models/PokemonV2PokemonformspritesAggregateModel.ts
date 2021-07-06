import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesAggregateModelBase } from "./PokemonV2PokemonformspritesAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesAggregateModel */
export interface PokemonV2PokemonformspritesAggregateModelType extends Instance<typeof PokemonV2PokemonformspritesAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesAggregateModel */
export { selectFromPokemonV2PokemonformspritesAggregate, pokemonV2PokemonformspritesAggregateModelPrimitives, PokemonV2PokemonformspritesAggregateModelSelector } from "./PokemonV2PokemonformspritesAggregateModel.base"

/**
 * PokemonV2PokemonformspritesAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesAggregateModel = PokemonV2PokemonformspritesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
