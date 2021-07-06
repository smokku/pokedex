import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameStddevSampFieldsModelBase } from "./PokemonV2ItemnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameStddevSampFieldsModel */
export interface PokemonV2ItemnameStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameStddevSampFieldsModel */
export { selectFromPokemonV2ItemnameStddevSampFields, pokemonV2ItemnameStddevSampFieldsModelPrimitives, PokemonV2ItemnameStddevSampFieldsModelSelector } from "./PokemonV2ItemnameStddevSampFieldsModel.base"

/**
 * PokemonV2ItemnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemnameStddevSampFieldsModel = PokemonV2ItemnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
