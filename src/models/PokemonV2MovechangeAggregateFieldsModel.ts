import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeAggregateFieldsModelBase } from "./PokemonV2MovechangeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeAggregateFieldsModel */
export interface PokemonV2MovechangeAggregateFieldsModelType extends Instance<typeof PokemonV2MovechangeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeAggregateFieldsModel */
export { selectFromPokemonV2MovechangeAggregateFields, pokemonV2MovechangeAggregateFieldsModelPrimitives, PokemonV2MovechangeAggregateFieldsModelSelector } from "./PokemonV2MovechangeAggregateFieldsModel.base"

/**
 * PokemonV2MovechangeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movechange"
 */
export const PokemonV2MovechangeAggregateFieldsModel = PokemonV2MovechangeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
