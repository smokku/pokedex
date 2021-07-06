import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageVarianceFieldsModelBase } from "./PokemonV2LanguageVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageVarianceFieldsModel */
export interface PokemonV2LanguageVarianceFieldsModelType extends Instance<typeof PokemonV2LanguageVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageVarianceFieldsModel */
export { selectFromPokemonV2LanguageVarianceFields, pokemonV2LanguageVarianceFieldsModelPrimitives, PokemonV2LanguageVarianceFieldsModelSelector } from "./PokemonV2LanguageVarianceFieldsModel.base"

/**
 * PokemonV2LanguageVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LanguageVarianceFieldsModel = PokemonV2LanguageVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
