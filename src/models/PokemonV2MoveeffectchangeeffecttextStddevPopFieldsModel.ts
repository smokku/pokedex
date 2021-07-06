import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextStddevPopFields, pokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModel = PokemonV2MoveeffectchangeeffecttextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
