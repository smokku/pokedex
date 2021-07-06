import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextVarSampFieldsModelBase } from "./PokemonV2ContesteffecteffecttextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextVarSampFieldsModel */
export interface PokemonV2ContesteffecteffecttextVarSampFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextVarSampFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextVarSampFields, pokemonV2ContesteffecteffecttextVarSampFieldsModelPrimitives, PokemonV2ContesteffecteffecttextVarSampFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarSampFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesteffecteffecttextVarSampFieldsModel = PokemonV2ContesteffecteffecttextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
