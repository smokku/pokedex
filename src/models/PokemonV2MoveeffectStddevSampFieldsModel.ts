import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectStddevSampFieldsModelBase } from "./PokemonV2MoveeffectStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectStddevSampFieldsModel */
export interface PokemonV2MoveeffectStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectStddevSampFieldsModel */
export { selectFromPokemonV2MoveeffectStddevSampFields, pokemonV2MoveeffectStddevSampFieldsModelPrimitives, PokemonV2MoveeffectStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectStddevSampFieldsModel.base"

/**
 * PokemonV2MoveeffectStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffectStddevSampFieldsModel = PokemonV2MoveeffectStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
