import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorAggregateModelBase } from "./PokemonV2BerryflavorAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorAggregateModel */
export interface PokemonV2BerryflavorAggregateModelType extends Instance<typeof PokemonV2BerryflavorAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorAggregateModel */
export { selectFromPokemonV2BerryflavorAggregate, pokemonV2BerryflavorAggregateModelPrimitives, PokemonV2BerryflavorAggregateModelSelector } from "./PokemonV2BerryflavorAggregateModel.base"

/**
 * PokemonV2BerryflavorAggregateModel
 *
 * aggregated selection of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorAggregateModel = PokemonV2BerryflavorAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
