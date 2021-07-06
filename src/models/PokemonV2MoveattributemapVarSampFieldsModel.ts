import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapVarSampFieldsModelBase } from "./PokemonV2MoveattributemapVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapVarSampFieldsModel */
export interface PokemonV2MoveattributemapVarSampFieldsModelType extends Instance<typeof PokemonV2MoveattributemapVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapVarSampFieldsModel */
export { selectFromPokemonV2MoveattributemapVarSampFields, pokemonV2MoveattributemapVarSampFieldsModelPrimitives, PokemonV2MoveattributemapVarSampFieldsModelSelector } from "./PokemonV2MoveattributemapVarSampFieldsModel.base"

/**
 * PokemonV2MoveattributemapVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MoveattributemapVarSampFieldsModel = PokemonV2MoveattributemapVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
