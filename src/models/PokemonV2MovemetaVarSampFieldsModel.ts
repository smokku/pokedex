import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaVarSampFieldsModelBase } from "./PokemonV2MovemetaVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaVarSampFieldsModel */
export interface PokemonV2MovemetaVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetaVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaVarSampFieldsModel */
export { selectFromPokemonV2MovemetaVarSampFields, pokemonV2MovemetaVarSampFieldsModelPrimitives, PokemonV2MovemetaVarSampFieldsModelSelector } from "./PokemonV2MovemetaVarSampFieldsModel.base"

/**
 * PokemonV2MovemetaVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetaVarSampFieldsModel = PokemonV2MovemetaVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
