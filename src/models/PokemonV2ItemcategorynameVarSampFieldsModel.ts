import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameVarSampFieldsModelBase } from "./PokemonV2ItemcategorynameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameVarSampFieldsModel */
export interface PokemonV2ItemcategorynameVarSampFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameVarSampFieldsModel */
export { selectFromPokemonV2ItemcategorynameVarSampFields, pokemonV2ItemcategorynameVarSampFieldsModelPrimitives, PokemonV2ItemcategorynameVarSampFieldsModelSelector } from "./PokemonV2ItemcategorynameVarSampFieldsModel.base"

/**
 * PokemonV2ItemcategorynameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemcategorynameVarSampFieldsModel = PokemonV2ItemcategorynameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
