import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageStddevFieldsModelBase } from "./PokemonV2LanguageStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageStddevFieldsModel */
export interface PokemonV2LanguageStddevFieldsModelType extends Instance<typeof PokemonV2LanguageStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageStddevFieldsModel */
export { selectFromPokemonV2LanguageStddevFields, pokemonV2LanguageStddevFieldsModelPrimitives, PokemonV2LanguageStddevFieldsModelSelector } from "./PokemonV2LanguageStddevFieldsModel.base"

/**
 * PokemonV2LanguageStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LanguageStddevFieldsModel = PokemonV2LanguageStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
