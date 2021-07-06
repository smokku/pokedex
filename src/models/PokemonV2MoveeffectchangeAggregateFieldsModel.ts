import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeAggregateFieldsModelBase } from "./PokemonV2MoveeffectchangeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeAggregateFieldsModel */
export interface PokemonV2MoveeffectchangeAggregateFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeAggregateFieldsModel */
export { selectFromPokemonV2MoveeffectchangeAggregateFields, pokemonV2MoveeffectchangeAggregateFieldsModelPrimitives, PokemonV2MoveeffectchangeAggregateFieldsModelSelector } from "./PokemonV2MoveeffectchangeAggregateFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveeffectchange"
 */
export const PokemonV2MoveeffectchangeAggregateFieldsModel = PokemonV2MoveeffectchangeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
