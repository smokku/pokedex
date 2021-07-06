import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextVarPopFields, pokemonV2MoveeffectchangeeffecttextVarPopFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarPopFieldsModel = PokemonV2MoveeffectchangeeffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
