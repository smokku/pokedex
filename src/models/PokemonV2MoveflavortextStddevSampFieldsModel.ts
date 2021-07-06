import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextStddevSampFieldsModelBase } from "./PokemonV2MoveflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextStddevSampFieldsModel */
export interface PokemonV2MoveflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2MoveflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextStddevSampFieldsModel */
export { selectFromPokemonV2MoveflavortextStddevSampFields, pokemonV2MoveflavortextStddevSampFieldsModelPrimitives, PokemonV2MoveflavortextStddevSampFieldsModelSelector } from "./PokemonV2MoveflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2MoveflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MoveflavortextStddevSampFieldsModel = PokemonV2MoveflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
