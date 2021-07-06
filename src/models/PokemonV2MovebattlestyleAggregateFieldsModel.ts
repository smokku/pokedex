import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleAggregateFieldsModelBase } from "./PokemonV2MovebattlestyleAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleAggregateFieldsModel */
export interface PokemonV2MovebattlestyleAggregateFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleAggregateFieldsModel */
export { selectFromPokemonV2MovebattlestyleAggregateFields, pokemonV2MovebattlestyleAggregateFieldsModelPrimitives, PokemonV2MovebattlestyleAggregateFieldsModelSelector } from "./PokemonV2MovebattlestyleAggregateFieldsModel.base"

/**
 * PokemonV2MovebattlestyleAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movebattlestyle"
 */
export const PokemonV2MovebattlestyleAggregateFieldsModel = PokemonV2MovebattlestyleAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
