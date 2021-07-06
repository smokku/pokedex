import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonstatVarSampFieldsModelBase } from "./PokemonV2PokemonstatVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonstatVarSampFieldsModel */
export interface PokemonV2PokemonstatVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonstatVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonstatVarSampFieldsModel */
export { selectFromPokemonV2PokemonstatVarSampFields, pokemonV2PokemonstatVarSampFieldsModelPrimitives, PokemonV2PokemonstatVarSampFieldsModelSelector } from "./PokemonV2PokemonstatVarSampFieldsModel.base"

/**
 * PokemonV2PokemonstatVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonstatVarSampFieldsModel = PokemonV2PokemonstatVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
