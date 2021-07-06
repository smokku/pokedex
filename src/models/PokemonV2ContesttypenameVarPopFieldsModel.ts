import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameVarPopFieldsModelBase } from "./PokemonV2ContesttypenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameVarPopFieldsModel */
export interface PokemonV2ContesttypenameVarPopFieldsModelType extends Instance<typeof PokemonV2ContesttypenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameVarPopFieldsModel */
export { selectFromPokemonV2ContesttypenameVarPopFields, pokemonV2ContesttypenameVarPopFieldsModelPrimitives, PokemonV2ContesttypenameVarPopFieldsModelSelector } from "./PokemonV2ContesttypenameVarPopFieldsModel.base"

/**
 * PokemonV2ContesttypenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesttypenameVarPopFieldsModel = PokemonV2ContesttypenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
