import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionStddevSampFieldsModelBase } from "./PokemonV2EncounterconditionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionStddevSampFieldsModel */
export interface PokemonV2EncounterconditionStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionStddevSampFieldsModel */
export { selectFromPokemonV2EncounterconditionStddevSampFields, pokemonV2EncounterconditionStddevSampFieldsModelPrimitives, PokemonV2EncounterconditionStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionStddevSampFieldsModel = PokemonV2EncounterconditionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
