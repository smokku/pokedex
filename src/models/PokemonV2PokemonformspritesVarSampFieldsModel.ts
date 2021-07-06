import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesVarSampFieldsModelBase } from "./PokemonV2PokemonformspritesVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesVarSampFieldsModel */
export interface PokemonV2PokemonformspritesVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesVarSampFieldsModel */
export { selectFromPokemonV2PokemonformspritesVarSampFields, pokemonV2PokemonformspritesVarSampFieldsModelPrimitives, PokemonV2PokemonformspritesVarSampFieldsModelSelector } from "./PokemonV2PokemonformspritesVarSampFieldsModel.base"

/**
 * PokemonV2PokemonformspritesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonformspritesVarSampFieldsModel = PokemonV2PokemonformspritesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
