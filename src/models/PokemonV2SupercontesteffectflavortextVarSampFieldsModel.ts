import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextVarSampFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextVarSampFieldsModel */
export interface PokemonV2SupercontesteffectflavortextVarSampFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextVarSampFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextVarSampFields, pokemonV2SupercontesteffectflavortextVarSampFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextVarSampFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarSampFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2SupercontesteffectflavortextVarSampFieldsModel = PokemonV2SupercontesteffectflavortextVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
