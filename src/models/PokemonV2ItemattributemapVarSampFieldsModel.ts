import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapVarSampFieldsModelBase } from "./PokemonV2ItemattributemapVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapVarSampFieldsModel */
export interface PokemonV2ItemattributemapVarSampFieldsModelType extends Instance<typeof PokemonV2ItemattributemapVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapVarSampFieldsModel */
export { selectFromPokemonV2ItemattributemapVarSampFields, pokemonV2ItemattributemapVarSampFieldsModelPrimitives, PokemonV2ItemattributemapVarSampFieldsModelSelector } from "./PokemonV2ItemattributemapVarSampFieldsModel.base"

/**
 * PokemonV2ItemattributemapVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemattributemapVarSampFieldsModel = PokemonV2ItemattributemapVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
