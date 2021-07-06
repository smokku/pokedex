import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectAggregateFieldsModelBase } from "./PokemonV2MoveeffectAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectAggregateFieldsModel */
export interface PokemonV2MoveeffectAggregateFieldsModelType extends Instance<typeof PokemonV2MoveeffectAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectAggregateFieldsModel */
export { selectFromPokemonV2MoveeffectAggregateFields, pokemonV2MoveeffectAggregateFieldsModelPrimitives, PokemonV2MoveeffectAggregateFieldsModelSelector } from "./PokemonV2MoveeffectAggregateFieldsModel.base"

/**
 * PokemonV2MoveeffectAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveeffect"
 */
export const PokemonV2MoveeffectAggregateFieldsModel = PokemonV2MoveeffectAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
