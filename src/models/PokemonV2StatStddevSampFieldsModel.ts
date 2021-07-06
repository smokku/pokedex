import { Instance } from "mobx-state-tree"
import { PokemonV2StatStddevSampFieldsModelBase } from "./PokemonV2StatStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatStddevSampFieldsModel */
export interface PokemonV2StatStddevSampFieldsModelType extends Instance<typeof PokemonV2StatStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatStddevSampFieldsModel */
export { selectFromPokemonV2StatStddevSampFields, pokemonV2StatStddevSampFieldsModelPrimitives, PokemonV2StatStddevSampFieldsModelSelector } from "./PokemonV2StatStddevSampFieldsModel.base"

/**
 * PokemonV2StatStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2StatStddevSampFieldsModel = PokemonV2StatStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
