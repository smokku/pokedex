import { Instance } from "mobx-state-tree"
import { PokemonV2VersionStddevSampFieldsModelBase } from "./PokemonV2VersionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionStddevSampFieldsModel */
export interface PokemonV2VersionStddevSampFieldsModelType extends Instance<typeof PokemonV2VersionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionStddevSampFieldsModel */
export { selectFromPokemonV2VersionStddevSampFields, pokemonV2VersionStddevSampFieldsModelPrimitives, PokemonV2VersionStddevSampFieldsModelSelector } from "./PokemonV2VersionStddevSampFieldsModel.base"

/**
 * PokemonV2VersionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersionStddevSampFieldsModel = PokemonV2VersionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
