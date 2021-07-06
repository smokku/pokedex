import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameVarPopFieldsModelBase } from "./PokemonV2RegionnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameVarPopFieldsModel */
export interface PokemonV2RegionnameVarPopFieldsModelType extends Instance<typeof PokemonV2RegionnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameVarPopFieldsModel */
export { selectFromPokemonV2RegionnameVarPopFields, pokemonV2RegionnameVarPopFieldsModelPrimitives, PokemonV2RegionnameVarPopFieldsModelSelector } from "./PokemonV2RegionnameVarPopFieldsModel.base"

/**
 * PokemonV2RegionnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2RegionnameVarPopFieldsModel = PokemonV2RegionnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
