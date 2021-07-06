import { Instance } from "mobx-state-tree"
import { PokemonV2MoveStddevSampFieldsModelBase } from "./PokemonV2MoveStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveStddevSampFieldsModel */
export interface PokemonV2MoveStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveStddevSampFieldsModel */
export { selectFromPokemonV2MoveStddevSampFields, pokemonV2MoveStddevSampFieldsModelPrimitives, PokemonV2MoveStddevSampFieldsModelSelector } from "./PokemonV2MoveStddevSampFieldsModel.base"

/**
 * PokemonV2MoveStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveStddevSampFieldsModel = PokemonV2MoveStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
