import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameVarPopFieldsModelBase } from "./PokemonV2LanguagenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameVarPopFieldsModel */
export interface PokemonV2LanguagenameVarPopFieldsModelType extends Instance<typeof PokemonV2LanguagenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameVarPopFieldsModel */
export { selectFromPokemonV2LanguagenameVarPopFields, pokemonV2LanguagenameVarPopFieldsModelPrimitives, PokemonV2LanguagenameVarPopFieldsModelSelector } from "./PokemonV2LanguagenameVarPopFieldsModel.base"

/**
 * PokemonV2LanguagenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LanguagenameVarPopFieldsModel = PokemonV2LanguagenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
