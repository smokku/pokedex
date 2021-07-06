import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaVarPopFieldsModelBase } from "./PokemonV2LocationareaVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaVarPopFieldsModel */
export interface PokemonV2LocationareaVarPopFieldsModelType extends Instance<typeof PokemonV2LocationareaVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaVarPopFieldsModel */
export { selectFromPokemonV2LocationareaVarPopFields, pokemonV2LocationareaVarPopFieldsModelPrimitives, PokemonV2LocationareaVarPopFieldsModelSelector } from "./PokemonV2LocationareaVarPopFieldsModel.base"

/**
 * PokemonV2LocationareaVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationareaVarPopFieldsModel = PokemonV2LocationareaVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
