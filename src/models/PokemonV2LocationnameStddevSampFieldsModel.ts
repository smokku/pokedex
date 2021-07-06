import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameStddevSampFieldsModelBase } from "./PokemonV2LocationnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameStddevSampFieldsModel */
export interface PokemonV2LocationnameStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameStddevSampFieldsModel */
export { selectFromPokemonV2LocationnameStddevSampFields, pokemonV2LocationnameStddevSampFieldsModelPrimitives, PokemonV2LocationnameStddevSampFieldsModelSelector } from "./PokemonV2LocationnameStddevSampFieldsModel.base"

/**
 * PokemonV2LocationnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationnameStddevSampFieldsModel = PokemonV2LocationnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
