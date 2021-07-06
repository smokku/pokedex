import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryVarPopFieldsModelBase } from "./PokemonV2ItemcategoryVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryVarPopFieldsModel */
export interface PokemonV2ItemcategoryVarPopFieldsModelType extends Instance<typeof PokemonV2ItemcategoryVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryVarPopFieldsModel */
export { selectFromPokemonV2ItemcategoryVarPopFields, pokemonV2ItemcategoryVarPopFieldsModelPrimitives, PokemonV2ItemcategoryVarPopFieldsModelSelector } from "./PokemonV2ItemcategoryVarPopFieldsModel.base"

/**
 * PokemonV2ItemcategoryVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemcategoryVarPopFieldsModel = PokemonV2ItemcategoryVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
