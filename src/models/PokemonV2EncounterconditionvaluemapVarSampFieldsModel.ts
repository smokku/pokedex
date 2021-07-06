import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapVarSampFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapVarSampFieldsModel */
export interface PokemonV2EncounterconditionvaluemapVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapVarSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapVarSampFields, pokemonV2EncounterconditionvaluemapVarSampFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionvaluemapVarSampFieldsModel = PokemonV2EncounterconditionvaluemapVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
