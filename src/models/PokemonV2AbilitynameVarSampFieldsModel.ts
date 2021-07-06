import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameVarSampFieldsModelBase } from "./PokemonV2AbilitynameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameVarSampFieldsModel */
export interface PokemonV2AbilitynameVarSampFieldsModelType extends Instance<typeof PokemonV2AbilitynameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameVarSampFieldsModel */
export { selectFromPokemonV2AbilitynameVarSampFields, pokemonV2AbilitynameVarSampFieldsModelPrimitives, PokemonV2AbilitynameVarSampFieldsModelSelector } from "./PokemonV2AbilitynameVarSampFieldsModel.base"

/**
 * PokemonV2AbilitynameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2AbilitynameVarSampFieldsModel = PokemonV2AbilitynameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
