import { Instance } from "mobx-state-tree"
import { PokemonV2LanguageVarSampFieldsModelBase } from "./PokemonV2LanguageVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguageVarSampFieldsModel */
export interface PokemonV2LanguageVarSampFieldsModelType extends Instance<typeof PokemonV2LanguageVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguageVarSampFieldsModel */
export { selectFromPokemonV2LanguageVarSampFields, pokemonV2LanguageVarSampFieldsModelPrimitives, PokemonV2LanguageVarSampFieldsModelSelector } from "./PokemonV2LanguageVarSampFieldsModel.base"

/**
 * PokemonV2LanguageVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LanguageVarSampFieldsModel = PokemonV2LanguageVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
