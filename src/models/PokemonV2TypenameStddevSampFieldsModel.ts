import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameStddevSampFieldsModelBase } from "./PokemonV2TypenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameStddevSampFieldsModel */
export interface PokemonV2TypenameStddevSampFieldsModelType extends Instance<typeof PokemonV2TypenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameStddevSampFieldsModel */
export { selectFromPokemonV2TypenameStddevSampFields, pokemonV2TypenameStddevSampFieldsModelPrimitives, PokemonV2TypenameStddevSampFieldsModelSelector } from "./PokemonV2TypenameStddevSampFieldsModel.base"

/**
 * PokemonV2TypenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypenameStddevSampFieldsModel = PokemonV2TypenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
