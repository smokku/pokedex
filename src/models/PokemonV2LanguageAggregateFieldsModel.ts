import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageAggregateFieldsModelBase } from "./PokemonV2LanguageAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageAggregateFieldsModel */
export interface PokemonV2LanguageAggregateFieldsModelType extends Instance<typeof PokemonV2LanguageAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageAggregateFieldsModel */
export { selectFromPokemonV2LanguageAggregateFields, pokemonV2LanguageAggregateFieldsModelPrimitives, PokemonV2LanguageAggregateFieldsModelSelector } from "./PokemonV2LanguageAggregateFieldsModel.base"

/**
 * PokemonV2LanguageAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_language"
 */
export const PokemonV2LanguageAggregateFieldsModel = PokemonV2LanguageAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
