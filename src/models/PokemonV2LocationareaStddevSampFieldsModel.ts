import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaStddevSampFieldsModelBase } from "./PokemonV2LocationareaStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaStddevSampFieldsModel */
export interface PokemonV2LocationareaStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationareaStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaStddevSampFieldsModel */
export { selectFromPokemonV2LocationareaStddevSampFields, pokemonV2LocationareaStddevSampFieldsModelPrimitives, PokemonV2LocationareaStddevSampFieldsModelSelector } from "./PokemonV2LocationareaStddevSampFieldsModel.base"

/**
 * PokemonV2LocationareaStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationareaStddevSampFieldsModel = PokemonV2LocationareaStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
