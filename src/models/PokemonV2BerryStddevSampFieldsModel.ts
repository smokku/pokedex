import { Instance } from "mobx-state-tree"
import { PokemonV2BerryStddevSampFieldsModelBase } from "./PokemonV2BerryStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryStddevSampFieldsModel */
export interface PokemonV2BerryStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryStddevSampFieldsModel */
export { selectFromPokemonV2BerryStddevSampFields, pokemonV2BerryStddevSampFieldsModelPrimitives, PokemonV2BerryStddevSampFieldsModelSelector } from "./PokemonV2BerryStddevSampFieldsModel.base"

/**
 * PokemonV2BerryStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryStddevSampFieldsModel = PokemonV2BerryStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
