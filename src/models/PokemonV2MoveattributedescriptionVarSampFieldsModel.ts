import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionVarSampFieldsModelBase } from "./PokemonV2MoveattributedescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionVarSampFieldsModel */
export interface PokemonV2MoveattributedescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionVarSampFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionVarSampFields, pokemonV2MoveattributedescriptionVarSampFieldsModelPrimitives, PokemonV2MoveattributedescriptionVarSampFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarSampFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveattributedescriptionVarSampFieldsModel = PokemonV2MoveattributedescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
