import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaencounterrateVarPopFieldsModelBase } from "./PokemonV2LocationareaencounterrateVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaencounterrateVarPopFieldsModel */
export interface PokemonV2LocationareaencounterrateVarPopFieldsModelType extends Instance<typeof PokemonV2LocationareaencounterrateVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaencounterrateVarPopFieldsModel */
export { selectFromPokemonV2LocationareaencounterrateVarPopFields, pokemonV2LocationareaencounterrateVarPopFieldsModelPrimitives, PokemonV2LocationareaencounterrateVarPopFieldsModelSelector } from "./PokemonV2LocationareaencounterrateVarPopFieldsModel.base"

/**
 * PokemonV2LocationareaencounterrateVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationareaencounterrateVarPopFieldsModel = PokemonV2LocationareaencounterrateVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
