import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapAggregateModelBase } from "./PokemonV2MoveattributemapAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapAggregateModel */
export interface PokemonV2MoveattributemapAggregateModelType extends Instance<typeof PokemonV2MoveattributemapAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapAggregateModel */
export { selectFromPokemonV2MoveattributemapAggregate, pokemonV2MoveattributemapAggregateModelPrimitives, PokemonV2MoveattributemapAggregateModelSelector } from "./PokemonV2MoveattributemapAggregateModel.base"

/**
 * PokemonV2MoveattributemapAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveattributemap"
 */
export const PokemonV2MoveattributemapAggregateModel = PokemonV2MoveattributemapAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
