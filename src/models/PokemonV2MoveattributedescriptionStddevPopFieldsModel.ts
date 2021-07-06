import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionStddevPopFieldsModelBase } from "./PokemonV2MoveattributedescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionStddevPopFieldsModel */
export interface PokemonV2MoveattributedescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionStddevPopFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionStddevPopFields, pokemonV2MoveattributedescriptionStddevPopFieldsModelPrimitives, PokemonV2MoveattributedescriptionStddevPopFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveattributedescriptionStddevPopFieldsModel = PokemonV2MoveattributedescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
