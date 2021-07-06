import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameVarPopFieldsModelBase } from "./PokemonV2NaturenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameVarPopFieldsModel */
export interface PokemonV2NaturenameVarPopFieldsModelType extends Instance<typeof PokemonV2NaturenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameVarPopFieldsModel */
export { selectFromPokemonV2NaturenameVarPopFields, pokemonV2NaturenameVarPopFieldsModelPrimitives, PokemonV2NaturenameVarPopFieldsModelSelector } from "./PokemonV2NaturenameVarPopFieldsModel.base"

/**
 * PokemonV2NaturenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2NaturenameVarPopFieldsModel = PokemonV2NaturenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
