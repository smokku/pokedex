import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatAggregateModelBase } from "./PokemonV2NaturepokeathlonstatAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatAggregateModel */
export interface PokemonV2NaturepokeathlonstatAggregateModelType extends Instance<typeof PokemonV2NaturepokeathlonstatAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatAggregateModel */
export { selectFromPokemonV2NaturepokeathlonstatAggregate, pokemonV2NaturepokeathlonstatAggregateModelPrimitives, PokemonV2NaturepokeathlonstatAggregateModelSelector } from "./PokemonV2NaturepokeathlonstatAggregateModel.base"

/**
 * PokemonV2NaturepokeathlonstatAggregateModel
 *
 * aggregated selection of "pokemon_v2_naturepokeathlonstat"
 */
export const PokemonV2NaturepokeathlonstatAggregateModel = PokemonV2NaturepokeathlonstatAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
