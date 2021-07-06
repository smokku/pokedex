import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeStddevSampFieldsModelBase } from "./PokemonV2MoveeffectchangeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeStddevSampFieldsModel */
export interface PokemonV2MoveeffectchangeStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeStddevSampFieldsModel */
export { selectFromPokemonV2MoveeffectchangeStddevSampFields, pokemonV2MoveeffectchangeStddevSampFieldsModelPrimitives, PokemonV2MoveeffectchangeStddevSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeStddevSampFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveeffectchangeStddevSampFieldsModel = PokemonV2MoveeffectchangeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
