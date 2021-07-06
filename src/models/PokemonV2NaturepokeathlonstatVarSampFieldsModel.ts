import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatVarSampFieldsModelBase } from "./PokemonV2NaturepokeathlonstatVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatVarSampFieldsModel */
export interface PokemonV2NaturepokeathlonstatVarSampFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatVarSampFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatVarSampFields, pokemonV2NaturepokeathlonstatVarSampFieldsModelPrimitives, PokemonV2NaturepokeathlonstatVarSampFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarSampFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2NaturepokeathlonstatVarSampFieldsModel = PokemonV2NaturepokeathlonstatVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
