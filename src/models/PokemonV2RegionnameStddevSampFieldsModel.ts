import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameStddevSampFieldsModelBase } from "./PokemonV2RegionnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameStddevSampFieldsModel */
export interface PokemonV2RegionnameStddevSampFieldsModelType extends Instance<typeof PokemonV2RegionnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameStddevSampFieldsModel */
export { selectFromPokemonV2RegionnameStddevSampFields, pokemonV2RegionnameStddevSampFieldsModelPrimitives, PokemonV2RegionnameStddevSampFieldsModelSelector } from "./PokemonV2RegionnameStddevSampFieldsModel.base"

/**
 * PokemonV2RegionnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2RegionnameStddevSampFieldsModel = PokemonV2RegionnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
