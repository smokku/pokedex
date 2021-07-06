import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextStddevFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextStddevFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextStddevFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextStddevFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextStddevFields, pokemonV2MoveeffectchangeeffecttextStddevFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextStddevFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MoveeffectchangeeffecttextStddevFieldsModel = PokemonV2MoveeffectchangeeffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
