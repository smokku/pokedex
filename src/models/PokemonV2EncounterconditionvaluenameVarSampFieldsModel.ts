import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameVarSampFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameVarSampFieldsModel */
export interface PokemonV2EncounterconditionvaluenameVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameVarSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameVarSampFields, pokemonV2EncounterconditionvaluenameVarSampFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionvaluenameVarSampFieldsModel = PokemonV2EncounterconditionvaluenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
