import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapAggregateModelBase } from "./PokemonV2ItemattributemapAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapAggregateModel */
export interface PokemonV2ItemattributemapAggregateModelType extends Instance<typeof PokemonV2ItemattributemapAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapAggregateModel */
export { selectFromPokemonV2ItemattributemapAggregate, pokemonV2ItemattributemapAggregateModelPrimitives, PokemonV2ItemattributemapAggregateModelSelector } from "./PokemonV2ItemattributemapAggregateModel.base"

/**
 * PokemonV2ItemattributemapAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapAggregateModel = PokemonV2ItemattributemapAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
