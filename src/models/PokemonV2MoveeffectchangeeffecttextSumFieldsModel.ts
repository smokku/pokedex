import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextSumFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextSumFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextSumFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextSumFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextSumFields, pokemonV2MoveeffectchangeeffecttextSumFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextSumFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextSumFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveeffectchangeeffecttextSumFieldsModel = PokemonV2MoveeffectchangeeffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
