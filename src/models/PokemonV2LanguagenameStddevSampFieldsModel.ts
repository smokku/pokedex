import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameStddevSampFieldsModelBase } from "./PokemonV2LanguagenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameStddevSampFieldsModel */
export interface PokemonV2LanguagenameStddevSampFieldsModelType extends Instance<typeof PokemonV2LanguagenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameStddevSampFieldsModel */
export { selectFromPokemonV2LanguagenameStddevSampFields, pokemonV2LanguagenameStddevSampFieldsModelPrimitives, PokemonV2LanguagenameStddevSampFieldsModelSelector } from "./PokemonV2LanguagenameStddevSampFieldsModel.base"

/**
 * PokemonV2LanguagenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LanguagenameStddevSampFieldsModel = PokemonV2LanguagenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
