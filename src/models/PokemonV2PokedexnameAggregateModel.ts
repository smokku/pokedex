import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameAggregateModelBase } from "./PokemonV2PokedexnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameAggregateModel */
export interface PokemonV2PokedexnameAggregateModelType extends Instance<typeof PokemonV2PokedexnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameAggregateModel */
export { selectFromPokemonV2PokedexnameAggregate, pokemonV2PokedexnameAggregateModelPrimitives, PokemonV2PokedexnameAggregateModelSelector } from "./PokemonV2PokedexnameAggregateModel.base"

/**
 * PokemonV2PokedexnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokedexname"
 */
export const PokemonV2PokedexnameAggregateModel = PokemonV2PokedexnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
