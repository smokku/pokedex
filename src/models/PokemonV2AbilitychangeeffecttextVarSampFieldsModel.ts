import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeeffecttextVarSampFieldsModelBase } from "./PokemonV2AbilitychangeeffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeeffecttextVarSampFieldsModel */
export interface PokemonV2AbilitychangeeffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2AbilitychangeeffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeeffecttextVarSampFieldsModel */
export { selectFromPokemonV2AbilitychangeeffecttextVarSampFields, pokemonV2AbilitychangeeffecttextVarSampFieldsModelPrimitives, PokemonV2AbilitychangeeffecttextVarSampFieldsModelSelector } from "./PokemonV2AbilitychangeeffecttextVarSampFieldsModel.base"

/**
 * PokemonV2AbilitychangeeffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilitychangeeffecttextVarSampFieldsModel = PokemonV2AbilitychangeeffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
