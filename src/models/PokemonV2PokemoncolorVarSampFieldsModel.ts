import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorVarSampFieldsModelBase } from "./PokemonV2PokemoncolorVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorVarSampFieldsModel */
export interface PokemonV2PokemoncolorVarSampFieldsModelType extends Instance<typeof PokemonV2PokemoncolorVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorVarSampFieldsModel */
export { selectFromPokemonV2PokemoncolorVarSampFields, pokemonV2PokemoncolorVarSampFieldsModelPrimitives, PokemonV2PokemoncolorVarSampFieldsModelSelector } from "./PokemonV2PokemoncolorVarSampFieldsModel.base"

/**
 * PokemonV2PokemoncolorVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemoncolorVarSampFieldsModel = PokemonV2PokemoncolorVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
