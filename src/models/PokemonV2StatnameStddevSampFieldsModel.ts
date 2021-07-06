import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameStddevSampFieldsModelBase } from "./PokemonV2StatnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameStddevSampFieldsModel */
export interface PokemonV2StatnameStddevSampFieldsModelType extends Instance<typeof PokemonV2StatnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameStddevSampFieldsModel */
export { selectFromPokemonV2StatnameStddevSampFields, pokemonV2StatnameStddevSampFieldsModelPrimitives, PokemonV2StatnameStddevSampFieldsModelSelector } from "./PokemonV2StatnameStddevSampFieldsModel.base"

/**
 * PokemonV2StatnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2StatnameStddevSampFieldsModel = PokemonV2StatnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
