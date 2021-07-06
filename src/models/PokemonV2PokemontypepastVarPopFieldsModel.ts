import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastVarPopFieldsModelBase } from "./PokemonV2PokemontypepastVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastVarPopFieldsModel */
export interface PokemonV2PokemontypepastVarPopFieldsModelType extends Instance<typeof PokemonV2PokemontypepastVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastVarPopFieldsModel */
export { selectFromPokemonV2PokemontypepastVarPopFields, pokemonV2PokemontypepastVarPopFieldsModelPrimitives, PokemonV2PokemontypepastVarPopFieldsModelSelector } from "./PokemonV2PokemontypepastVarPopFieldsModel.base"

/**
 * PokemonV2PokemontypepastVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemontypepastVarPopFieldsModel = PokemonV2PokemontypepastVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
