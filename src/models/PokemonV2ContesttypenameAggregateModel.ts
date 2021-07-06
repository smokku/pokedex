import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameAggregateModelBase } from "./PokemonV2ContesttypenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameAggregateModel */
export interface PokemonV2ContesttypenameAggregateModelType extends Instance<typeof PokemonV2ContesttypenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameAggregateModel */
export { selectFromPokemonV2ContesttypenameAggregate, pokemonV2ContesttypenameAggregateModelPrimitives, PokemonV2ContesttypenameAggregateModelSelector } from "./PokemonV2ContesttypenameAggregateModel.base"

/**
 * PokemonV2ContesttypenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameAggregateModel = PokemonV2ContesttypenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
