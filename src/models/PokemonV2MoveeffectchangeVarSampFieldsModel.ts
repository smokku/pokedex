import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeVarSampFieldsModelBase } from "./PokemonV2MoveeffectchangeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeVarSampFieldsModel */
export interface PokemonV2MoveeffectchangeVarSampFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeVarSampFieldsModel */
export { selectFromPokemonV2MoveeffectchangeVarSampFields, pokemonV2MoveeffectchangeVarSampFieldsModelPrimitives, PokemonV2MoveeffectchangeVarSampFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarSampFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveeffectchangeVarSampFieldsModel = PokemonV2MoveeffectchangeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
