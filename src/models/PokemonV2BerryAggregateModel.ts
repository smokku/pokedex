import { Instance } from "mobx-state-tree"
import { PokemonV2BerryAggregateModelBase } from "./PokemonV2BerryAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryAggregateModel */
export interface PokemonV2BerryAggregateModelType extends Instance<typeof PokemonV2BerryAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryAggregateModel */
export { selectFromPokemonV2BerryAggregate, pokemonV2BerryAggregateModelPrimitives, PokemonV2BerryAggregateModelSelector } from "./PokemonV2BerryAggregateModel.base"

/**
 * PokemonV2BerryAggregateModel
 *
 * aggregated selection of "pokemon_v2_berry"
 */
export const PokemonV2BerryAggregateModel = PokemonV2BerryAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
