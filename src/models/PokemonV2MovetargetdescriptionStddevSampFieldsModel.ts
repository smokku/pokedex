import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionStddevSampFieldsModelBase } from "./PokemonV2MovetargetdescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionStddevSampFieldsModel */
export interface PokemonV2MovetargetdescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionStddevSampFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionStddevSampFields, pokemonV2MovetargetdescriptionStddevSampFieldsModelPrimitives, PokemonV2MovetargetdescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovetargetdescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovetargetdescriptionStddevSampFieldsModel = PokemonV2MovetargetdescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
