import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextAvgFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextAvgFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextAvgFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextAvgFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextAvgFields, pokemonV2MoveeffectchangeeffecttextAvgFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextAvgFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextAvgFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveeffectchangeeffecttextAvgFieldsModel = PokemonV2MoveeffectchangeeffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
