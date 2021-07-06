import { Instance } from "mobx-state-tree"
import { PokemonV2NaturebattlestylepreferenceAggregateModelBase } from "./PokemonV2NaturebattlestylepreferenceAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2NaturebattlestylepreferenceAggregateModel */
export interface PokemonV2NaturebattlestylepreferenceAggregateModelType extends Instance<typeof PokemonV2NaturebattlestylepreferenceAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturebattlestylepreferenceAggregateModel */
export { selectFromPokemonV2NaturebattlestylepreferenceAggregate, pokemonV2NaturebattlestylepreferenceAggregateModelPrimitives, PokemonV2NaturebattlestylepreferenceAggregateModelSelector } from "./PokemonV2NaturebattlestylepreferenceAggregateModel.base"

/**
 * PokemonV2NaturebattlestylepreferenceAggregateModel
 *
 * aggregated selection of "pokemon_v2_naturebattlestylepreference"
 */
export const PokemonV2NaturebattlestylepreferenceAggregateModel = PokemonV2NaturebattlestylepreferenceAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
