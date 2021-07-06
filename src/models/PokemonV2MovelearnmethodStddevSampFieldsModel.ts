import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodStddevSampFieldsModelBase } from "./PokemonV2MovelearnmethodStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodStddevSampFieldsModel */
export interface PokemonV2MovelearnmethodStddevSampFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodStddevSampFieldsModel */
export { selectFromPokemonV2MovelearnmethodStddevSampFields, pokemonV2MovelearnmethodStddevSampFieldsModelPrimitives, PokemonV2MovelearnmethodStddevSampFieldsModelSelector } from "./PokemonV2MovelearnmethodStddevSampFieldsModel.base"

/**
 * PokemonV2MovelearnmethodStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovelearnmethodStddevSampFieldsModel = PokemonV2MovelearnmethodStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
