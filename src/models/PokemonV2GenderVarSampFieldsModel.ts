import { Instance } from "mobx-state-tree"
import { PokemonV2GenderVarSampFieldsModelBase } from "./PokemonV2GenderVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderVarSampFieldsModel */
export interface PokemonV2GenderVarSampFieldsModelType extends Instance<typeof PokemonV2GenderVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderVarSampFieldsModel */
export { selectFromPokemonV2GenderVarSampFields, pokemonV2GenderVarSampFieldsModelPrimitives, PokemonV2GenderVarSampFieldsModelSelector } from "./PokemonV2GenderVarSampFieldsModel.base"

/**
 * PokemonV2GenderVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2GenderVarSampFieldsModel = PokemonV2GenderVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
