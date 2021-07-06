import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameVarSampFieldsModelBase } from "./PokemonV2ItemattributenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameVarSampFieldsModel */
export interface PokemonV2ItemattributenameVarSampFieldsModelType extends Instance<typeof PokemonV2ItemattributenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameVarSampFieldsModel */
export { selectFromPokemonV2ItemattributenameVarSampFields, pokemonV2ItemattributenameVarSampFieldsModelPrimitives, PokemonV2ItemattributenameVarSampFieldsModelSelector } from "./PokemonV2ItemattributenameVarSampFieldsModel.base"

/**
 * PokemonV2ItemattributenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributenameVarSampFieldsModel = PokemonV2ItemattributenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
