import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextVarSampFieldsModelBase } from "./PokemonV2ContesteffectflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextVarSampFieldsModel */
export interface PokemonV2ContesteffectflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextVarSampFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextVarSampFields, pokemonV2ContesteffectflavortextVarSampFieldsModelPrimitives, PokemonV2ContesteffectflavortextVarSampFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarSampFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesteffectflavortextVarSampFieldsModel = PokemonV2ContesteffectflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
