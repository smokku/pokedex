import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexAggregateFieldsModelBase } from "./PokemonV2PokedexAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexAggregateFieldsModel */
export interface PokemonV2PokedexAggregateFieldsModelType extends Instance<typeof PokemonV2PokedexAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexAggregateFieldsModel */
export { selectFromPokemonV2PokedexAggregateFields, pokemonV2PokedexAggregateFieldsModelPrimitives, PokemonV2PokedexAggregateFieldsModelSelector } from "./PokemonV2PokedexAggregateFieldsModel.base"

/**
 * PokemonV2PokedexAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokedex"
 */
export const PokemonV2PokedexAggregateFieldsModel = PokemonV2PokedexAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
