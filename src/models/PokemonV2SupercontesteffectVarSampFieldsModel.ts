import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectVarSampFieldsModelBase } from "./PokemonV2SupercontesteffectVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectVarSampFieldsModel */
export interface PokemonV2SupercontesteffectVarSampFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectVarSampFieldsModel */
export { selectFromPokemonV2SupercontesteffectVarSampFields, pokemonV2SupercontesteffectVarSampFieldsModelPrimitives, PokemonV2SupercontesteffectVarSampFieldsModelSelector } from "./PokemonV2SupercontesteffectVarSampFieldsModel.base"

/**
 * PokemonV2SupercontesteffectVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2SupercontesteffectVarSampFieldsModel = PokemonV2SupercontesteffectVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
