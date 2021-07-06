import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeAggregateModelBase } from "./PokemonV2PokemonshapeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeAggregateModel */
export interface PokemonV2PokemonshapeAggregateModelType extends Instance<typeof PokemonV2PokemonshapeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeAggregateModel */
export { selectFromPokemonV2PokemonshapeAggregate, pokemonV2PokemonshapeAggregateModelPrimitives, PokemonV2PokemonshapeAggregateModelSelector } from "./PokemonV2PokemonshapeAggregateModel.base"

/**
 * PokemonV2PokemonshapeAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonshape"
 */
export const PokemonV2PokemonshapeAggregateModel = PokemonV2PokemonshapeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
