import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorStddevSampFieldsModelBase } from "./PokemonV2BerryflavorStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorStddevSampFieldsModel */
export interface PokemonV2BerryflavorStddevSampFieldsModelType extends Instance<typeof PokemonV2BerryflavorStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorStddevSampFieldsModel */
export { selectFromPokemonV2BerryflavorStddevSampFields, pokemonV2BerryflavorStddevSampFieldsModelPrimitives, PokemonV2BerryflavorStddevSampFieldsModelSelector } from "./PokemonV2BerryflavorStddevSampFieldsModel.base"

/**
 * PokemonV2BerryflavorStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2BerryflavorStddevSampFieldsModel = PokemonV2BerryflavorStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
