import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboVarPopFieldsModelBase } from "./PokemonV2ContestcomboVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboVarPopFieldsModel */
export interface PokemonV2ContestcomboVarPopFieldsModelType extends Instance<typeof PokemonV2ContestcomboVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboVarPopFieldsModel */
export { selectFromPokemonV2ContestcomboVarPopFields, pokemonV2ContestcomboVarPopFieldsModelPrimitives, PokemonV2ContestcomboVarPopFieldsModelSelector } from "./PokemonV2ContestcomboVarPopFieldsModel.base"

/**
 * PokemonV2ContestcomboVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContestcomboVarPopFieldsModel = PokemonV2ContestcomboVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
