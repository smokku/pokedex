import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameAggregateModelBase } from "./PokemonV2TypenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameAggregateModel */
export interface PokemonV2TypenameAggregateModelType extends Instance<typeof PokemonV2TypenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameAggregateModel */
export { selectFromPokemonV2TypenameAggregate, pokemonV2TypenameAggregateModelPrimitives, PokemonV2TypenameAggregateModelSelector } from "./PokemonV2TypenameAggregateModel.base"

/**
 * PokemonV2TypenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_typename"
 */
export const PokemonV2TypenameAggregateModel = PokemonV2TypenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
