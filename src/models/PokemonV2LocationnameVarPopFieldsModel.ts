import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameVarPopFieldsModelBase } from "./PokemonV2LocationnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameVarPopFieldsModel */
export interface PokemonV2LocationnameVarPopFieldsModelType extends Instance<typeof PokemonV2LocationnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameVarPopFieldsModel */
export { selectFromPokemonV2LocationnameVarPopFields, pokemonV2LocationnameVarPopFieldsModelPrimitives, PokemonV2LocationnameVarPopFieldsModelSelector } from "./PokemonV2LocationnameVarPopFieldsModel.base"

/**
 * PokemonV2LocationnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2LocationnameVarPopFieldsModel = PokemonV2LocationnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
