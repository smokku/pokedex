import { Instance } from "mobx-state-tree"
import { PokemonV2MoveVarSampFieldsModelBase } from "./PokemonV2MoveVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveVarSampFieldsModel */
export interface PokemonV2MoveVarSampFieldsModelType extends Instance<typeof PokemonV2MoveVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveVarSampFieldsModel */
export { selectFromPokemonV2MoveVarSampFields, pokemonV2MoveVarSampFieldsModelPrimitives, PokemonV2MoveVarSampFieldsModelSelector } from "./PokemonV2MoveVarSampFieldsModel.base"

/**
 * PokemonV2MoveVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveVarSampFieldsModel = PokemonV2MoveVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
