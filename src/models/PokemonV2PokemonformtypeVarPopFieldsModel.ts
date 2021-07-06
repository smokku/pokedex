import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeVarPopFieldsModelBase } from "./PokemonV2PokemonformtypeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeVarPopFieldsModel */
export interface PokemonV2PokemonformtypeVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeVarPopFieldsModel */
export { selectFromPokemonV2PokemonformtypeVarPopFields, pokemonV2PokemonformtypeVarPopFieldsModelPrimitives, PokemonV2PokemonformtypeVarPopFieldsModelSelector } from "./PokemonV2PokemonformtypeVarPopFieldsModel.base"

/**
 * PokemonV2PokemonformtypeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformtypeVarPopFieldsModel = PokemonV2PokemonformtypeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
