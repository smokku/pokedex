import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeVarSampFieldsModelBase } from "./PokemonV2MovechangeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeVarSampFieldsModel */
export interface PokemonV2MovechangeVarSampFieldsModelType extends Instance<typeof PokemonV2MovechangeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeVarSampFieldsModel */
export { selectFromPokemonV2MovechangeVarSampFields, pokemonV2MovechangeVarSampFieldsModelPrimitives, PokemonV2MovechangeVarSampFieldsModelSelector } from "./PokemonV2MovechangeVarSampFieldsModel.base"

/**
 * PokemonV2MovechangeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovechangeVarSampFieldsModel = PokemonV2MovechangeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
