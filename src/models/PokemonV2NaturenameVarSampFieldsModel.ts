import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameVarSampFieldsModelBase } from "./PokemonV2NaturenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameVarSampFieldsModel */
export interface PokemonV2NaturenameVarSampFieldsModelType extends Instance<typeof PokemonV2NaturenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameVarSampFieldsModel */
export { selectFromPokemonV2NaturenameVarSampFields, pokemonV2NaturenameVarSampFieldsModelPrimitives, PokemonV2NaturenameVarSampFieldsModelSelector } from "./PokemonV2NaturenameVarSampFieldsModel.base"

/**
 * PokemonV2NaturenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2NaturenameVarSampFieldsModel = PokemonV2NaturenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
