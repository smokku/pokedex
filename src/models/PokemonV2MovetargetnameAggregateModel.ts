import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameAggregateModelBase } from "./PokemonV2MovetargetnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameAggregateModel */
export interface PokemonV2MovetargetnameAggregateModelType extends Instance<typeof PokemonV2MovetargetnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameAggregateModel */
export { selectFromPokemonV2MovetargetnameAggregate, pokemonV2MovetargetnameAggregateModelPrimitives, PokemonV2MovetargetnameAggregateModelSelector } from "./PokemonV2MovetargetnameAggregateModel.base"

/**
 * PokemonV2MovetargetnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movetargetname"
 */
export const PokemonV2MovetargetnameAggregateModel = PokemonV2MovetargetnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
