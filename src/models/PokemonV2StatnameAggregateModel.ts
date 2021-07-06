import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameAggregateModelBase } from "./PokemonV2StatnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameAggregateModel */
export interface PokemonV2StatnameAggregateModelType extends Instance<typeof PokemonV2StatnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameAggregateModel */
export { selectFromPokemonV2StatnameAggregate, pokemonV2StatnameAggregateModelPrimitives, PokemonV2StatnameAggregateModelSelector } from "./PokemonV2StatnameAggregateModel.base"

/**
 * PokemonV2StatnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_statname"
 */
export const PokemonV2StatnameAggregateModel = PokemonV2StatnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
