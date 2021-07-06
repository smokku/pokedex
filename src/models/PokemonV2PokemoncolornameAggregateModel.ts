import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameAggregateModelBase } from "./PokemonV2PokemoncolornameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameAggregateModel */
export interface PokemonV2PokemoncolornameAggregateModelType extends Instance<typeof PokemonV2PokemoncolornameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameAggregateModel */
export { selectFromPokemonV2PokemoncolornameAggregate, pokemonV2PokemoncolornameAggregateModelPrimitives, PokemonV2PokemoncolornameAggregateModelSelector } from "./PokemonV2PokemoncolornameAggregateModel.base"

/**
 * PokemonV2PokemoncolornameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameAggregateModel = PokemonV2PokemoncolornameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
