import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerStddevSampFieldsModelBase } from "./PokemonV2EvolutiontriggerStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerStddevSampFieldsModel */
export interface PokemonV2EvolutiontriggerStddevSampFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerStddevSampFieldsModel */
export { selectFromPokemonV2EvolutiontriggerStddevSampFields, pokemonV2EvolutiontriggerStddevSampFieldsModelPrimitives, PokemonV2EvolutiontriggerStddevSampFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevSampFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EvolutiontriggerStddevSampFieldsModel = PokemonV2EvolutiontriggerStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
