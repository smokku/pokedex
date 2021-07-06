import { Instance } from "mobx-state-tree"
import { PokemonV2NatureAggregateModelBase } from "./PokemonV2NatureAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2NatureAggregateModel */
export interface PokemonV2NatureAggregateModelType extends Instance<typeof PokemonV2NatureAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureAggregateModel */
export { selectFromPokemonV2NatureAggregate, pokemonV2NatureAggregateModelPrimitives, PokemonV2NatureAggregateModelSelector } from "./PokemonV2NatureAggregateModel.base"

/**
 * PokemonV2NatureAggregateModel
 *
 * aggregated selection of "pokemon_v2_nature"
 */
export const PokemonV2NatureAggregateModel = PokemonV2NatureAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
