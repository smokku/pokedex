import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionStddevFieldsModelBase } from "./PokemonV2MoveattributedescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionStddevFieldsModel */
export interface PokemonV2MoveattributedescriptionStddevFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionStddevFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionStddevFields, pokemonV2MoveattributedescriptionStddevFieldsModelPrimitives, PokemonV2MoveattributedescriptionStddevFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveattributedescriptionStddevFieldsModel = PokemonV2MoveattributedescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
