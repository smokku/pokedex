import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageStddevSampFieldsModelBase } from "./PokemonV2LanguageStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageStddevSampFieldsModel */
export interface PokemonV2LanguageStddevSampFieldsModelType extends Instance<typeof PokemonV2LanguageStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageStddevSampFieldsModel */
export { selectFromPokemonV2LanguageStddevSampFields, pokemonV2LanguageStddevSampFieldsModelPrimitives, PokemonV2LanguageStddevSampFieldsModelSelector } from "./PokemonV2LanguageStddevSampFieldsModel.base"

/**
 * PokemonV2LanguageStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LanguageStddevSampFieldsModel = PokemonV2LanguageStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
