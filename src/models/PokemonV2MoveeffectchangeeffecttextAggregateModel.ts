import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextAggregateModelBase } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextAggregateModel */
export interface PokemonV2MoveeffectchangeeffecttextAggregateModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextAggregateModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextAggregate, pokemonV2MoveeffectchangeeffecttextAggregateModelPrimitives, PokemonV2MoveeffectchangeeffecttextAggregateModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAggregateModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextAggregateModel
 *
 * aggregated selection of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextAggregateModel = PokemonV2MoveeffectchangeeffecttextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
