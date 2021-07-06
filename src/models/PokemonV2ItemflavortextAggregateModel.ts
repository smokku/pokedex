import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextAggregateModelBase } from "./PokemonV2ItemflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextAggregateModel */
export interface PokemonV2ItemflavortextAggregateModelType extends Instance<typeof PokemonV2ItemflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextAggregateModel */
export { selectFromPokemonV2ItemflavortextAggregate, pokemonV2ItemflavortextAggregateModelPrimitives, PokemonV2ItemflavortextAggregateModelSelector } from "./PokemonV2ItemflavortextAggregateModel.base"

/**
 * PokemonV2ItemflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemflavortext"
 */
export const PokemonV2ItemflavortextAggregateModel = PokemonV2ItemflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
