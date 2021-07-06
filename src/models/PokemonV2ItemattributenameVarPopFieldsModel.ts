import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameVarPopFieldsModelBase } from "./PokemonV2ItemattributenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameVarPopFieldsModel */
export interface PokemonV2ItemattributenameVarPopFieldsModelType extends Instance<typeof PokemonV2ItemattributenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameVarPopFieldsModel */
export { selectFromPokemonV2ItemattributenameVarPopFields, pokemonV2ItemattributenameVarPopFieldsModelPrimitives, PokemonV2ItemattributenameVarPopFieldsModelSelector } from "./PokemonV2ItemattributenameVarPopFieldsModel.base"

/**
 * PokemonV2ItemattributenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributenameVarPopFieldsModel = PokemonV2ItemattributenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
