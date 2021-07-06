import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextAggregateModelBase } from "./PokemonV2MoveeffecteffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextAggregateModel */
export interface PokemonV2MoveeffecteffecttextAggregateModelType extends Instance<typeof PokemonV2MoveeffecteffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextAggregateModel */
export { selectFromPokemonV2MoveeffecteffecttextAggregate, pokemonV2MoveeffecteffecttextAggregateModelPrimitives, PokemonV2MoveeffecteffecttextAggregateModelSelector } from "./PokemonV2MoveeffecteffecttextAggregateModel.base"

/**
 * PokemonV2MoveeffecteffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveeffecteffecttext"
 */
export const PokemonV2MoveeffecteffecttextAggregateModel = PokemonV2MoveeffecteffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
