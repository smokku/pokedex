import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionAggregateFieldsModelBase } from "./PokemonV2MoveattributedescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionAggregateFieldsModel */
export interface PokemonV2MoveattributedescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionAggregateFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionAggregateFields, pokemonV2MoveattributedescriptionAggregateFieldsModelPrimitives, PokemonV2MoveattributedescriptionAggregateFieldsModelSelector } from "./PokemonV2MoveattributedescriptionAggregateFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveattributedescription"
 */
export const PokemonV2MoveattributedescriptionAggregateFieldsModel = PokemonV2MoveattributedescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
