import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageAggregateModelBase } from "./PokemonV2LanguageAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageAggregateModel */
export interface PokemonV2LanguageAggregateModelType extends Instance<typeof PokemonV2LanguageAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageAggregateModel */
export { selectFromPokemonV2LanguageAggregate, pokemonV2LanguageAggregateModelPrimitives, PokemonV2LanguageAggregateModelSelector } from "./PokemonV2LanguageAggregateModel.base"

/**
 * PokemonV2LanguageAggregateModel
 *
 * aggregated selection of "pokemon_v2_language"
 */
export const PokemonV2LanguageAggregateModel = PokemonV2LanguageAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
