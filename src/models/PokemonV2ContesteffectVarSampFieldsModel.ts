import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectVarSampFieldsModelBase } from "./PokemonV2ContesteffectVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectVarSampFieldsModel */
export interface PokemonV2ContesteffectVarSampFieldsModelType extends Instance<typeof PokemonV2ContesteffectVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectVarSampFieldsModel */
export { selectFromPokemonV2ContesteffectVarSampFields, pokemonV2ContesteffectVarSampFieldsModelPrimitives, PokemonV2ContesteffectVarSampFieldsModelSelector } from "./PokemonV2ContesteffectVarSampFieldsModel.base"

/**
 * PokemonV2ContesteffectVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesteffectVarSampFieldsModel = PokemonV2ContesteffectVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
