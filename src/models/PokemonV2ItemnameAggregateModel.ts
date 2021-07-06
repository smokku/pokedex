import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameAggregateModelBase } from "./PokemonV2ItemnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameAggregateModel */
export interface PokemonV2ItemnameAggregateModelType extends Instance<typeof PokemonV2ItemnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameAggregateModel */
export { selectFromPokemonV2ItemnameAggregate, pokemonV2ItemnameAggregateModelPrimitives, PokemonV2ItemnameAggregateModelSelector } from "./PokemonV2ItemnameAggregateModel.base"

/**
 * PokemonV2ItemnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_itemname"
 */
export const PokemonV2ItemnameAggregateModel = PokemonV2ItemnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
