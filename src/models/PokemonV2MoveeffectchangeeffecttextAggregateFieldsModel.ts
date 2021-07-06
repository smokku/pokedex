import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextAggregateFields, pokemonV2MoveeffectchangeeffecttextAggregateFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_moveeffectchangeeffecttext"
 */
export const PokemonV2MoveeffectchangeeffecttextAggregateFieldsModel = PokemonV2MoveeffectchangeeffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
