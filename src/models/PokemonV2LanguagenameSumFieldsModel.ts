import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameSumFieldsModelBase } from "./PokemonV2LanguagenameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameSumFieldsModel */
export interface PokemonV2LanguagenameSumFieldsModelType extends Instance<typeof PokemonV2LanguagenameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameSumFieldsModel */
export { selectFromPokemonV2LanguagenameSumFields, pokemonV2LanguagenameSumFieldsModelPrimitives, PokemonV2LanguagenameSumFieldsModelSelector } from "./PokemonV2LanguagenameSumFieldsModel.base"

/**
 * PokemonV2LanguagenameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LanguagenameSumFieldsModel = PokemonV2LanguagenameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
