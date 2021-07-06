import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeAggregateFieldsModelBase } from "./PokemonV2MoveattributeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeAggregateFieldsModel */
export interface PokemonV2MoveattributeAggregateFieldsModelType extends Instance<typeof PokemonV2MoveattributeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeAggregateFieldsModel */
export { selectFromPokemonV2MoveattributeAggregateFields, pokemonV2MoveattributeAggregateFieldsModelPrimitives, PokemonV2MoveattributeAggregateFieldsModelSelector } from "./PokemonV2MoveattributeAggregateFieldsModel.base"

/**
 * PokemonV2MoveattributeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveattribute"
 */
export const PokemonV2MoveattributeAggregateFieldsModel = PokemonV2MoveattributeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
