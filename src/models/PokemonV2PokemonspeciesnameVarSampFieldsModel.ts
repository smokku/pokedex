import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameVarSampFieldsModelBase } from "./PokemonV2PokemonspeciesnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameVarSampFieldsModel */
export interface PokemonV2PokemonspeciesnameVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameVarSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameVarSampFields, pokemonV2PokemonspeciesnameVarSampFieldsModelPrimitives, PokemonV2PokemonspeciesnameVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspeciesnameVarSampFieldsModel = PokemonV2PokemonspeciesnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
