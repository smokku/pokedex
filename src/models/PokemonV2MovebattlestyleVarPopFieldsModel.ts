import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleVarPopFieldsModelBase } from "./PokemonV2MovebattlestyleVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleVarPopFieldsModel */
export interface PokemonV2MovebattlestyleVarPopFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleVarPopFieldsModel */
export { selectFromPokemonV2MovebattlestyleVarPopFields, pokemonV2MovebattlestyleVarPopFieldsModelPrimitives, PokemonV2MovebattlestyleVarPopFieldsModelSelector } from "./PokemonV2MovebattlestyleVarPopFieldsModel.base"

/**
 * PokemonV2MovebattlestyleVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovebattlestyleVarPopFieldsModel = PokemonV2MovebattlestyleVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
