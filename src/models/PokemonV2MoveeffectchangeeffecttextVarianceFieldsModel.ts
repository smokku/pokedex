import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextVarianceFields, pokemonV2MoveeffectchangeeffecttextVarianceFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarianceFieldsModel = PokemonV2MoveeffectchangeeffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
