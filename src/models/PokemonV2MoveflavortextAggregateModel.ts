import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextAggregateModelBase } from "./PokemonV2MoveflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextAggregateModel */
export interface PokemonV2MoveflavortextAggregateModelType extends Instance<typeof PokemonV2MoveflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextAggregateModel */
export { selectFromPokemonV2MoveflavortextAggregate, pokemonV2MoveflavortextAggregateModelPrimitives, PokemonV2MoveflavortextAggregateModelSelector } from "./PokemonV2MoveflavortextAggregateModel.base"

/**
 * PokemonV2MoveflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveflavortext"
 */
export const PokemonV2MoveflavortextAggregateModel = PokemonV2MoveflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
