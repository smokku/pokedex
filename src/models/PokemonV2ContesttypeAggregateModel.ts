import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeAggregateModelBase } from "./PokemonV2ContesttypeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeAggregateModel */
export interface PokemonV2ContesttypeAggregateModelType extends Instance<typeof PokemonV2ContesttypeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeAggregateModel */
export { selectFromPokemonV2ContesttypeAggregate, pokemonV2ContesttypeAggregateModelPrimitives, PokemonV2ContesttypeAggregateModelSelector } from "./PokemonV2ContesttypeAggregateModel.base"

/**
 * PokemonV2ContesttypeAggregateModel
 *
 * aggregated selection of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeAggregateModel = PokemonV2ContesttypeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
