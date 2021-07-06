import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameVarSampFieldsModelBase } from "./PokemonV2ItemnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameVarSampFieldsModel */
export interface PokemonV2ItemnameVarSampFieldsModelType extends Instance<typeof PokemonV2ItemnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameVarSampFieldsModel */
export { selectFromPokemonV2ItemnameVarSampFields, pokemonV2ItemnameVarSampFieldsModelPrimitives, PokemonV2ItemnameVarSampFieldsModelSelector } from "./PokemonV2ItemnameVarSampFieldsModel.base"

/**
 * PokemonV2ItemnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemnameVarSampFieldsModel = PokemonV2ItemnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
