import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectVarSampFieldsModelBase } from "./PokemonV2MoveeffectVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectVarSampFieldsModel */
export interface PokemonV2MoveeffectVarSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectVarSampFieldsModel */
export { selectFromPokemonV2MoveeffectVarSampFields, pokemonV2MoveeffectVarSampFieldsModelPrimitives, PokemonV2MoveeffectVarSampFieldsModelSelector } from "./PokemonV2MoveeffectVarSampFieldsModel.base"

/**
 * PokemonV2MoveeffectVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveeffectVarSampFieldsModel = PokemonV2MoveeffectVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
