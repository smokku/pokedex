import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionAggregateModelBase } from "./PokemonV2PokemonspeciesdescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionAggregateModel */
export interface PokemonV2PokemonspeciesdescriptionAggregateModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionAggregateModel */
export { selectFromPokemonV2PokemonspeciesdescriptionAggregate, pokemonV2PokemonspeciesdescriptionAggregateModelPrimitives, PokemonV2PokemonspeciesdescriptionAggregateModelSelector } from "./PokemonV2PokemonspeciesdescriptionAggregateModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesdescription"
 */
export const PokemonV2PokemonspeciesdescriptionAggregateModel = PokemonV2PokemonspeciesdescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
