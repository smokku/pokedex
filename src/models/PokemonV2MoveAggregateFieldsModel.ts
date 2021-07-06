import { Instance } from "mobx-state-tree"
import { PokemonV2MoveAggregateFieldsModelBase } from "./PokemonV2MoveAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveAggregateFieldsModel */
export interface PokemonV2MoveAggregateFieldsModelType extends Instance<typeof PokemonV2MoveAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveAggregateFieldsModel */
export { selectFromPokemonV2MoveAggregateFields, pokemonV2MoveAggregateFieldsModelPrimitives, PokemonV2MoveAggregateFieldsModelSelector } from "./PokemonV2MoveAggregateFieldsModel.base"

/**
 * PokemonV2MoveAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_move"
 */
export const PokemonV2MoveAggregateFieldsModel = PokemonV2MoveAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
