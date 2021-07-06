import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameVarSampFieldsModelBase } from "./PokemonV2MovenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameVarSampFieldsModel */
export interface PokemonV2MovenameVarSampFieldsModelType extends Instance<typeof PokemonV2MovenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameVarSampFieldsModel */
export { selectFromPokemonV2MovenameVarSampFields, pokemonV2MovenameVarSampFieldsModelPrimitives, PokemonV2MovenameVarSampFieldsModelSelector } from "./PokemonV2MovenameVarSampFieldsModel.base"

/**
 * PokemonV2MovenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovenameVarSampFieldsModel = PokemonV2MovenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
