import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionAggregateModelBase } from "./PokemonV2MoveattributedescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionAggregateModel */
export interface PokemonV2MoveattributedescriptionAggregateModelType extends Instance<typeof PokemonV2MoveattributedescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionAggregateModel */
export { selectFromPokemonV2MoveattributedescriptionAggregate, pokemonV2MoveattributedescriptionAggregateModelPrimitives, PokemonV2MoveattributedescriptionAggregateModelSelector } from "./PokemonV2MoveattributedescriptionAggregateModel.base"

/**
 * PokemonV2MoveattributedescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveattributedescription"
 */
export const PokemonV2MoveattributedescriptionAggregateModel = PokemonV2MoveattributedescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
