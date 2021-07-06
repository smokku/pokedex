import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexAggregateModelBase } from "./PokemonV2PokemongameindexAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexAggregateModel */
export interface PokemonV2PokemongameindexAggregateModelType extends Instance<typeof PokemonV2PokemongameindexAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexAggregateModel */
export { selectFromPokemonV2PokemongameindexAggregate, pokemonV2PokemongameindexAggregateModelPrimitives, PokemonV2PokemongameindexAggregateModelSelector } from "./PokemonV2PokemongameindexAggregateModel.base"

/**
 * PokemonV2PokemongameindexAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexAggregateModel = PokemonV2PokemongameindexAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
