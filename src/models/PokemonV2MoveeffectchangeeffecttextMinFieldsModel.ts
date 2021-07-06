import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextMinFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextMinFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextMinFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextMinFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextMinFields, pokemonV2MoveeffectchangeeffecttextMinFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextMinFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextMinFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MoveeffectchangeeffecttextMinFieldsModel = PokemonV2MoveeffectchangeeffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
