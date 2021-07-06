import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameAggregateModelBase } from "./PokemonV2LocationnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameAggregateModel */
export interface PokemonV2LocationnameAggregateModelType extends Instance<typeof PokemonV2LocationnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameAggregateModel */
export { selectFromPokemonV2LocationnameAggregate, pokemonV2LocationnameAggregateModelPrimitives, PokemonV2LocationnameAggregateModelSelector } from "./PokemonV2LocationnameAggregateModel.base"

/**
 * PokemonV2LocationnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_locationname"
 */
export const PokemonV2LocationnameAggregateModel = PokemonV2LocationnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
