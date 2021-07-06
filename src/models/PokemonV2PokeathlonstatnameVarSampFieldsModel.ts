import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameVarSampFieldsModelBase } from "./PokemonV2PokeathlonstatnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameVarSampFieldsModel */
export interface PokemonV2PokeathlonstatnameVarSampFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameVarSampFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameVarSampFields, pokemonV2PokeathlonstatnameVarSampFieldsModelPrimitives, PokemonV2PokeathlonstatnameVarSampFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarSampFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokeathlonstatnameVarSampFieldsModel = PokemonV2PokeathlonstatnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
