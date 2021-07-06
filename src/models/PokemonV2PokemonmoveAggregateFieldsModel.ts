import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveAggregateFieldsModelBase } from "./PokemonV2PokemonmoveAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveAggregateFieldsModel */
export interface PokemonV2PokemonmoveAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonmoveAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveAggregateFieldsModel */
export { selectFromPokemonV2PokemonmoveAggregateFields, pokemonV2PokemonmoveAggregateFieldsModelPrimitives, PokemonV2PokemonmoveAggregateFieldsModelSelector } from "./PokemonV2PokemonmoveAggregateFieldsModel.base"

/**
 * PokemonV2PokemonmoveAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonmove"
 */
export const PokemonV2PokemonmoveAggregateFieldsModel = PokemonV2PokemonmoveAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
