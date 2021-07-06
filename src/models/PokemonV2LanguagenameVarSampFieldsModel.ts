import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameVarSampFieldsModelBase } from "./PokemonV2LanguagenameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameVarSampFieldsModel */
export interface PokemonV2LanguagenameVarSampFieldsModelType extends Instance<typeof PokemonV2LanguagenameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameVarSampFieldsModel */
export { selectFromPokemonV2LanguagenameVarSampFields, pokemonV2LanguagenameVarSampFieldsModelPrimitives, PokemonV2LanguagenameVarSampFieldsModelSelector } from "./PokemonV2LanguagenameVarSampFieldsModel.base"

/**
 * PokemonV2LanguagenameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2LanguagenameVarSampFieldsModel = PokemonV2LanguagenameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
