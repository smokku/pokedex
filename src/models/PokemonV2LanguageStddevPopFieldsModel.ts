import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageStddevPopFieldsModelBase } from "./PokemonV2LanguageStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageStddevPopFieldsModel */
export interface PokemonV2LanguageStddevPopFieldsModelType extends Instance<typeof PokemonV2LanguageStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageStddevPopFieldsModel */
export { selectFromPokemonV2LanguageStddevPopFields, pokemonV2LanguageStddevPopFieldsModelPrimitives, PokemonV2LanguageStddevPopFieldsModelSelector } from "./PokemonV2LanguageStddevPopFieldsModel.base"

/**
 * PokemonV2LanguageStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LanguageStddevPopFieldsModel = PokemonV2LanguageStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
