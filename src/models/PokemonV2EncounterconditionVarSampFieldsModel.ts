import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionVarSampFieldsModelBase } from "./PokemonV2EncounterconditionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionVarSampFieldsModel */
export interface PokemonV2EncounterconditionVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionVarSampFieldsModel */
export { selectFromPokemonV2EncounterconditionVarSampFields, pokemonV2EncounterconditionVarSampFieldsModelPrimitives, PokemonV2EncounterconditionVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionVarSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionVarSampFieldsModel = PokemonV2EncounterconditionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
