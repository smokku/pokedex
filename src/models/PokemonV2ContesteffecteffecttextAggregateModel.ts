import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextAggregateModelBase } from "./PokemonV2ContesteffecteffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextAggregateModel */
export interface PokemonV2ContesteffecteffecttextAggregateModelType extends Instance<typeof PokemonV2ContesteffecteffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextAggregateModel */
export { selectFromPokemonV2ContesteffecteffecttextAggregate, pokemonV2ContesteffecteffecttextAggregateModelPrimitives, PokemonV2ContesteffecteffecttextAggregateModelSelector } from "./PokemonV2ContesteffecteffecttextAggregateModel.base"

/**
 * PokemonV2ContesteffecteffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_contesteffecteffecttext"
 */
export const PokemonV2ContesteffecteffecttextAggregateModel = PokemonV2ContesteffecteffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
