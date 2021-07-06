import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionVarSampFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionVarSampFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionVarSampFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionVarSampFields, pokemonV2PokemonspeciesdescriptionVarSampFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionVarSampFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionVarSampFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonspeciesdescriptionVarSampFieldsModel = PokemonV2PokemonspeciesdescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
