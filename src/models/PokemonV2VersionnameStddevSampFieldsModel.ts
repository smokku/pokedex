import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameStddevSampFieldsModelBase } from "./PokemonV2VersionnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameStddevSampFieldsModel */
export interface PokemonV2VersionnameStddevSampFieldsModelType extends Instance<typeof PokemonV2VersionnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameStddevSampFieldsModel */
export { selectFromPokemonV2VersionnameStddevSampFields, pokemonV2VersionnameStddevSampFieldsModelPrimitives, PokemonV2VersionnameStddevSampFieldsModelSelector } from "./PokemonV2VersionnameStddevSampFieldsModel.base"

/**
 * PokemonV2VersionnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersionnameStddevSampFieldsModel = PokemonV2VersionnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
