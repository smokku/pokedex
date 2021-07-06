import { Instance } from "mobx-state-tree"
import { PokemonV2ItemVarSampFieldsModelBase } from "./PokemonV2ItemVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemVarSampFieldsModel */
export interface PokemonV2ItemVarSampFieldsModelType extends Instance<typeof PokemonV2ItemVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemVarSampFieldsModel */
export { selectFromPokemonV2ItemVarSampFields, pokemonV2ItemVarSampFieldsModelPrimitives, PokemonV2ItemVarSampFieldsModelSelector } from "./PokemonV2ItemVarSampFieldsModel.base"

/**
 * PokemonV2ItemVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemVarSampFieldsModel = PokemonV2ItemVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
