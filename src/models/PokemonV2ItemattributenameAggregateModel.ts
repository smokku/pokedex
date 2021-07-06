import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameAggregateModelBase } from "./PokemonV2ItemattributenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameAggregateModel */
export interface PokemonV2ItemattributenameAggregateModelType extends Instance<typeof PokemonV2ItemattributenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameAggregateModel */
export { selectFromPokemonV2ItemattributenameAggregate, pokemonV2ItemattributenameAggregateModelPrimitives, PokemonV2ItemattributenameAggregateModelSelector } from "./PokemonV2ItemattributenameAggregateModel.base"

/**
 * PokemonV2ItemattributenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameAggregateModel = PokemonV2ItemattributenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
