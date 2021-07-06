import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameVarPopFieldsModelBase } from "./PokemonV2ItemcategorynameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameVarPopFieldsModel */
export interface PokemonV2ItemcategorynameVarPopFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameVarPopFieldsModel */
export { selectFromPokemonV2ItemcategorynameVarPopFields, pokemonV2ItemcategorynameVarPopFieldsModelPrimitives, PokemonV2ItemcategorynameVarPopFieldsModelSelector } from "./PokemonV2ItemcategorynameVarPopFieldsModel.base"

/**
 * PokemonV2ItemcategorynameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemcategorynameVarPopFieldsModel = PokemonV2ItemcategorynameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
