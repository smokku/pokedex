import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionStddevSampFieldsModelBase } from "./PokemonV2MoveattributedescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionStddevSampFieldsModel */
export interface PokemonV2MoveattributedescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionStddevSampFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionStddevSampFields, pokemonV2MoveattributedescriptionStddevSampFieldsModelPrimitives, PokemonV2MoveattributedescriptionStddevSampFieldsModelSelector } from "./PokemonV2MoveattributedescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveattributedescriptionStddevSampFieldsModel = PokemonV2MoveattributedescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
