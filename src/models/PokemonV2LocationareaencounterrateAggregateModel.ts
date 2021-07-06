import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateAggregateModelBase } from "./PokemonV2LocationareaencounterrateAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateAggregateModel */
export interface PokemonV2LocationareaencounterrateAggregateModelType extends Instance<typeof PokemonV2LocationareaencounterrateAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateAggregateModel */
export { selectFromPokemonV2LocationareaencounterrateAggregate, pokemonV2LocationareaencounterrateAggregateModelPrimitives, PokemonV2LocationareaencounterrateAggregateModelSelector } from "./PokemonV2LocationareaencounterrateAggregateModel.base"

/**
 * PokemonV2LocationareaencounterrateAggregateModel
 *
 * aggregated selection of "pokemon_v2_locationareaencounterrate"
 */
export const PokemonV2LocationareaencounterrateAggregateModel = PokemonV2LocationareaencounterrateAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
