import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameVarSampFieldsModelBase } from "./PokemonV2MoveattributenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameVarSampFieldsModel */
export interface PokemonV2MoveattributenameVarSampFieldsModelType extends Instance<typeof PokemonV2MoveattributenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameVarSampFieldsModel */
export { selectFromPokemonV2MoveattributenameVarSampFields, pokemonV2MoveattributenameVarSampFieldsModelPrimitives, PokemonV2MoveattributenameVarSampFieldsModelSelector } from "./PokemonV2MoveattributenameVarSampFieldsModel.base"

/**
 * PokemonV2MoveattributenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveattributenameVarSampFieldsModel = PokemonV2MoveattributenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
