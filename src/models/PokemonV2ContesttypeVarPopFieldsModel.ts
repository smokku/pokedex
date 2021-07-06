import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeVarPopFieldsModelBase } from "./PokemonV2ContesttypeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeVarPopFieldsModel */
export interface PokemonV2ContesttypeVarPopFieldsModelType extends Instance<typeof PokemonV2ContesttypeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeVarPopFieldsModel */
export { selectFromPokemonV2ContesttypeVarPopFields, pokemonV2ContesttypeVarPopFieldsModelPrimitives, PokemonV2ContesttypeVarPopFieldsModelSelector } from "./PokemonV2ContesttypeVarPopFieldsModel.base"

/**
 * PokemonV2ContesttypeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesttypeVarPopFieldsModel = PokemonV2ContesttypeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
