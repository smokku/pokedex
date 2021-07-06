import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageMaxFieldsModelBase } from "./PokemonV2LanguageMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageMaxFieldsModel */
export interface PokemonV2LanguageMaxFieldsModelType extends Instance<typeof PokemonV2LanguageMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageMaxFieldsModel */
export { selectFromPokemonV2LanguageMaxFields, pokemonV2LanguageMaxFieldsModelPrimitives, PokemonV2LanguageMaxFieldsModelSelector } from "./PokemonV2LanguageMaxFieldsModel.base"

/**
 * PokemonV2LanguageMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LanguageMaxFieldsModel = PokemonV2LanguageMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
