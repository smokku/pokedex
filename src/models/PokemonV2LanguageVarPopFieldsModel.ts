import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageVarPopFieldsModelBase } from "./PokemonV2LanguageVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageVarPopFieldsModel */
export interface PokemonV2LanguageVarPopFieldsModelType extends Instance<typeof PokemonV2LanguageVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageVarPopFieldsModel */
export { selectFromPokemonV2LanguageVarPopFields, pokemonV2LanguageVarPopFieldsModelPrimitives, PokemonV2LanguageVarPopFieldsModelSelector } from "./PokemonV2LanguageVarPopFieldsModel.base"

/**
 * PokemonV2LanguageVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LanguageVarPopFieldsModel = PokemonV2LanguageVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
