import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameAggregateModelBase } from "./PokemonV2LocationareanameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameAggregateModel */
export interface PokemonV2LocationareanameAggregateModelType extends Instance<typeof PokemonV2LocationareanameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameAggregateModel */
export { selectFromPokemonV2LocationareanameAggregate, pokemonV2LocationareanameAggregateModelPrimitives, PokemonV2LocationareanameAggregateModelSelector } from "./PokemonV2LocationareanameAggregateModel.base"

/**
 * PokemonV2LocationareanameAggregateModel
 *
 * aggregated selection of "pokemon_v2_locationareaname"
 */
export const PokemonV2LocationareanameAggregateModel = PokemonV2LocationareanameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
