import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryVarSampFieldsModelBase } from "./PokemonV2ItemcategoryVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryVarSampFieldsModel */
export interface PokemonV2ItemcategoryVarSampFieldsModelType extends Instance<typeof PokemonV2ItemcategoryVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryVarSampFieldsModel */
export { selectFromPokemonV2ItemcategoryVarSampFields, pokemonV2ItemcategoryVarSampFieldsModelPrimitives, PokemonV2ItemcategoryVarSampFieldsModelSelector } from "./PokemonV2ItemcategoryVarSampFieldsModel.base"

/**
 * PokemonV2ItemcategoryVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItemcategoryVarSampFieldsModel = PokemonV2ItemcategoryVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
