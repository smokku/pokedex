import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeVarSampFieldsModelBase } from "./PokemonV2MoveattributeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeVarSampFieldsModel */
export interface PokemonV2MoveattributeVarSampFieldsModelType extends Instance<typeof PokemonV2MoveattributeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeVarSampFieldsModel */
export { selectFromPokemonV2MoveattributeVarSampFields, pokemonV2MoveattributeVarSampFieldsModelPrimitives, PokemonV2MoveattributeVarSampFieldsModelSelector } from "./PokemonV2MoveattributeVarSampFieldsModel.base"

/**
 * PokemonV2MoveattributeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveattributeVarSampFieldsModel = PokemonV2MoveattributeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
