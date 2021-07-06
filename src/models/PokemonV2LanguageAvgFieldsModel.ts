import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageAvgFieldsModelBase } from "./PokemonV2LanguageAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageAvgFieldsModel */
export interface PokemonV2LanguageAvgFieldsModelType extends Instance<typeof PokemonV2LanguageAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageAvgFieldsModel */
export { selectFromPokemonV2LanguageAvgFields, pokemonV2LanguageAvgFieldsModelPrimitives, PokemonV2LanguageAvgFieldsModelSelector } from "./PokemonV2LanguageAvgFieldsModel.base"

/**
 * PokemonV2LanguageAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LanguageAvgFieldsModel = PokemonV2LanguageAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
