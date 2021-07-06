import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeAggregateModelBase } from "./PokemonV2ItemattributeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeAggregateModel */
export interface PokemonV2ItemattributeAggregateModelType extends Instance<typeof PokemonV2ItemattributeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeAggregateModel */
export { selectFromPokemonV2ItemattributeAggregate, pokemonV2ItemattributeAggregateModelPrimitives, PokemonV2ItemattributeAggregateModelSelector } from "./PokemonV2ItemattributeAggregateModel.base"

/**
 * PokemonV2ItemattributeAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeAggregateModel = PokemonV2ItemattributeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
