import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameVarSampFieldsModelBase } from "./PokemonV2RegionnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameVarSampFieldsModel */
export interface PokemonV2RegionnameVarSampFieldsModelType extends Instance<typeof PokemonV2RegionnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameVarSampFieldsModel */
export { selectFromPokemonV2RegionnameVarSampFields, pokemonV2RegionnameVarSampFieldsModelPrimitives, PokemonV2RegionnameVarSampFieldsModelSelector } from "./PokemonV2RegionnameVarSampFieldsModel.base"

/**
 * PokemonV2RegionnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2RegionnameVarSampFieldsModel = PokemonV2RegionnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
