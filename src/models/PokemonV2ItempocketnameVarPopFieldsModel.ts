import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameVarPopFieldsModelBase } from "./PokemonV2ItempocketnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameVarPopFieldsModel */
export interface PokemonV2ItempocketnameVarPopFieldsModelType extends Instance<typeof PokemonV2ItempocketnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameVarPopFieldsModel */
export { selectFromPokemonV2ItempocketnameVarPopFields, pokemonV2ItempocketnameVarPopFieldsModelPrimitives, PokemonV2ItempocketnameVarPopFieldsModelSelector } from "./PokemonV2ItempocketnameVarPopFieldsModel.base"

/**
 * PokemonV2ItempocketnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItempocketnameVarPopFieldsModel = PokemonV2ItempocketnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
