import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodStddevSampFields, pokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModel = PokemonV2VersiongroupmovelearnmethodStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
