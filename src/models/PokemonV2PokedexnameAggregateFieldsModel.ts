import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameAggregateFieldsModelBase } from "./PokemonV2PokedexnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameAggregateFieldsModel */
export interface PokemonV2PokedexnameAggregateFieldsModelType extends Instance<typeof PokemonV2PokedexnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameAggregateFieldsModel */
export { selectFromPokemonV2PokedexnameAggregateFields, pokemonV2PokedexnameAggregateFieldsModelPrimitives, PokemonV2PokedexnameAggregateFieldsModelSelector } from "./PokemonV2PokedexnameAggregateFieldsModel.base"

/**
 * PokemonV2PokedexnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokedexname"
 */
export const PokemonV2PokedexnameAggregateFieldsModel = PokemonV2PokedexnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
