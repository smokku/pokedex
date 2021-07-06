import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameVarPopFieldsModelBase } from "./PokemonV2MovetargetnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameVarPopFieldsModel */
export interface PokemonV2MovetargetnameVarPopFieldsModelType extends Instance<typeof PokemonV2MovetargetnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameVarPopFieldsModel */
export { selectFromPokemonV2MovetargetnameVarPopFields, pokemonV2MovetargetnameVarPopFieldsModelPrimitives, PokemonV2MovetargetnameVarPopFieldsModelSelector } from "./PokemonV2MovetargetnameVarPopFieldsModel.base"

/**
 * PokemonV2MovetargetnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovetargetnameVarPopFieldsModel = PokemonV2MovetargetnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
