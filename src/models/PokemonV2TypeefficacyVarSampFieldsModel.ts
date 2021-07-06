import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyVarSampFieldsModelBase } from "./PokemonV2TypeefficacyVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyVarSampFieldsModel */
export interface PokemonV2TypeefficacyVarSampFieldsModelType extends Instance<typeof PokemonV2TypeefficacyVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyVarSampFieldsModel */
export { selectFromPokemonV2TypeefficacyVarSampFields, pokemonV2TypeefficacyVarSampFieldsModelPrimitives, PokemonV2TypeefficacyVarSampFieldsModelSelector } from "./PokemonV2TypeefficacyVarSampFieldsModel.base"

/**
 * PokemonV2TypeefficacyVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2TypeefficacyVarSampFieldsModel = PokemonV2TypeefficacyVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
