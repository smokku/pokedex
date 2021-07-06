import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexAggregateModelBase } from "./PokemonV2PokedexAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexAggregateModel */
export interface PokemonV2PokedexAggregateModelType extends Instance<typeof PokemonV2PokedexAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexAggregateModel */
export { selectFromPokemonV2PokedexAggregate, pokemonV2PokedexAggregateModelPrimitives, PokemonV2PokedexAggregateModelSelector } from "./PokemonV2PokedexAggregateModel.base"

/**
 * PokemonV2PokedexAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexAggregateModel = PokemonV2PokedexAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
