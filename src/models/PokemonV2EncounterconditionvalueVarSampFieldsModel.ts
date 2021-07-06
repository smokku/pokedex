import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueVarSampFieldsModelBase } from "./PokemonV2EncounterconditionvalueVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueVarSampFieldsModel */
export interface PokemonV2EncounterconditionvalueVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueVarSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueVarSampFields, pokemonV2EncounterconditionvalueVarSampFieldsModelPrimitives, PokemonV2EncounterconditionvalueVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvalueVarSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionvalueVarSampFieldsModel = PokemonV2EncounterconditionvalueVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
