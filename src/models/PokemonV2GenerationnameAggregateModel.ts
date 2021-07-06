import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameAggregateModelBase } from "./PokemonV2GenerationnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameAggregateModel */
export interface PokemonV2GenerationnameAggregateModelType extends Instance<typeof PokemonV2GenerationnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameAggregateModel */
export { selectFromPokemonV2GenerationnameAggregate, pokemonV2GenerationnameAggregateModelPrimitives, PokemonV2GenerationnameAggregateModelSelector } from "./PokemonV2GenerationnameAggregateModel.base"

/**
 * PokemonV2GenerationnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_generationname"
 */
export const PokemonV2GenerationnameAggregateModel = PokemonV2GenerationnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
