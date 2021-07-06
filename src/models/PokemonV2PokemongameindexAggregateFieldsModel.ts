import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexAggregateFieldsModelBase } from "./PokemonV2PokemongameindexAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexAggregateFieldsModel */
export interface PokemonV2PokemongameindexAggregateFieldsModelType extends Instance<typeof PokemonV2PokemongameindexAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexAggregateFieldsModel */
export { selectFromPokemonV2PokemongameindexAggregateFields, pokemonV2PokemongameindexAggregateFieldsModelPrimitives, PokemonV2PokemongameindexAggregateFieldsModelSelector } from "./PokemonV2PokemongameindexAggregateFieldsModel.base"

/**
 * PokemonV2PokemongameindexAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemongameindex"
 */
export const PokemonV2PokemongameindexAggregateFieldsModel = PokemonV2PokemongameindexAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
