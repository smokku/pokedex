import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameAggregateModelBase } from "./PokemonV2LanguagenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameAggregateModel */
export interface PokemonV2LanguagenameAggregateModelType extends Instance<typeof PokemonV2LanguagenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameAggregateModel */
export { selectFromPokemonV2LanguagenameAggregate, pokemonV2LanguagenameAggregateModelPrimitives, PokemonV2LanguagenameAggregateModelSelector } from "./PokemonV2LanguagenameAggregateModel.base"

/**
 * PokemonV2LanguagenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_languagename"
 */
export const PokemonV2LanguagenameAggregateModel = PokemonV2LanguagenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
