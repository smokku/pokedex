import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeStddevSampFieldsModelBase } from "./PokemonV2MovechangeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeStddevSampFieldsModel */
export interface PokemonV2MovechangeStddevSampFieldsModelType extends Instance<typeof PokemonV2MovechangeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeStddevSampFieldsModel */
export { selectFromPokemonV2MovechangeStddevSampFields, pokemonV2MovechangeStddevSampFieldsModelPrimitives, PokemonV2MovechangeStddevSampFieldsModelSelector } from "./PokemonV2MovechangeStddevSampFieldsModel.base"

/**
 * PokemonV2MovechangeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovechangeStddevSampFieldsModel = PokemonV2MovechangeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
