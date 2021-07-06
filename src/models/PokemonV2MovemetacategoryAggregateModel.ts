import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryAggregateModelBase } from "./PokemonV2MovemetacategoryAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryAggregateModel */
export interface PokemonV2MovemetacategoryAggregateModelType extends Instance<typeof PokemonV2MovemetacategoryAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryAggregateModel */
export { selectFromPokemonV2MovemetacategoryAggregate, pokemonV2MovemetacategoryAggregateModelPrimitives, PokemonV2MovemetacategoryAggregateModelSelector } from "./PokemonV2MovemetacategoryAggregateModel.base"

/**
 * PokemonV2MovemetacategoryAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryAggregateModel = PokemonV2MovemetacategoryAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
