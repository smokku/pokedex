import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelBase } from "./PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel */
export interface PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel */
export { selectFromPokemonV2MovelearnmethoddescriptionStddevSampFields, pokemonV2MovelearnmethoddescriptionStddevSampFieldsModelPrimitives, PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovelearnmethoddescriptionStddevSampFieldsModel = PokemonV2MovelearnmethoddescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
