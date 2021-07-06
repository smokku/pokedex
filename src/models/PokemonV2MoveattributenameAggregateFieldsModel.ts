import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameAggregateFieldsModelBase } from "./PokemonV2MoveattributenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameAggregateFieldsModel */
export interface PokemonV2MoveattributenameAggregateFieldsModelType extends Instance<typeof PokemonV2MoveattributenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameAggregateFieldsModel */
export { selectFromPokemonV2MoveattributenameAggregateFields, pokemonV2MoveattributenameAggregateFieldsModelPrimitives, PokemonV2MoveattributenameAggregateFieldsModelSelector } from "./PokemonV2MoveattributenameAggregateFieldsModel.base"

/**
 * PokemonV2MoveattributenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameAggregateFieldsModel = PokemonV2MoveattributenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
