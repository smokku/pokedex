import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameVarPopFieldsModelBase } from "./PokemonV2MovenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameVarPopFieldsModel */
export interface PokemonV2MovenameVarPopFieldsModelType extends Instance<typeof PokemonV2MovenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameVarPopFieldsModel */
export { selectFromPokemonV2MovenameVarPopFields, pokemonV2MovenameVarPopFieldsModelPrimitives, PokemonV2MovenameVarPopFieldsModelSelector } from "./PokemonV2MovenameVarPopFieldsModel.base"

/**
 * PokemonV2MovenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovenameVarPopFieldsModel = PokemonV2MovenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
