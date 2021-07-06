import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameAggregateModelBase } from "./PokemonV2MoveattributenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameAggregateModel */
export interface PokemonV2MoveattributenameAggregateModelType extends Instance<typeof PokemonV2MoveattributenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameAggregateModel */
export { selectFromPokemonV2MoveattributenameAggregate, pokemonV2MoveattributenameAggregateModelPrimitives, PokemonV2MoveattributenameAggregateModelSelector } from "./PokemonV2MoveattributenameAggregateModel.base"

/**
 * PokemonV2MoveattributenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveattributename"
 */
export const PokemonV2MoveattributenameAggregateModel = PokemonV2MoveattributenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
