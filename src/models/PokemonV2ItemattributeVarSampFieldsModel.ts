import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeVarSampFieldsModelBase } from "./PokemonV2ItemattributeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeVarSampFieldsModel */
export interface PokemonV2ItemattributeVarSampFieldsModelType extends Instance<typeof PokemonV2ItemattributeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeVarSampFieldsModel */
export { selectFromPokemonV2ItemattributeVarSampFields, pokemonV2ItemattributeVarSampFieldsModelPrimitives, PokemonV2ItemattributeVarSampFieldsModelSelector } from "./PokemonV2ItemattributeVarSampFieldsModel.base"

/**
 * PokemonV2ItemattributeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributeVarSampFieldsModel = PokemonV2ItemattributeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
