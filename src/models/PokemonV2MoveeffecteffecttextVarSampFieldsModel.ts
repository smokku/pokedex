import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextVarSampFieldsModelBase } from "./PokemonV2MoveeffecteffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextVarSampFieldsModel */
export interface PokemonV2MoveeffecteffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextVarSampFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextVarSampFields, pokemonV2MoveeffecteffecttextVarSampFieldsModelPrimitives, PokemonV2MoveeffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarSampFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveeffecteffecttextVarSampFieldsModel = PokemonV2MoveeffecteffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
