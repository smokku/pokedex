import { Instance } from "mobx-state-tree"
import { PokemonV2LocationStddevSampFieldsModelBase } from "./PokemonV2LocationStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationStddevSampFieldsModel */
export interface PokemonV2LocationStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationStddevSampFieldsModel */
export { selectFromPokemonV2LocationStddevSampFields, pokemonV2LocationStddevSampFieldsModelPrimitives, PokemonV2LocationStddevSampFieldsModelSelector } from "./PokemonV2LocationStddevSampFieldsModel.base"

/**
 * PokemonV2LocationStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationStddevSampFieldsModel = PokemonV2LocationStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
