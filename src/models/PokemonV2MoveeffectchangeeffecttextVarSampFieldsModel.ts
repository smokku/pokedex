import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelBase } from "./PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel */
export interface PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel */
export { selectFromPokemonV2MoveeffectchangeeffecttextVarSampFields, pokemonV2MoveeffectchangeeffecttextVarSampFieldsModelPrimitives, PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveeffectchangeeffecttextVarSampFieldsModel = PokemonV2MoveeffectchangeeffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
