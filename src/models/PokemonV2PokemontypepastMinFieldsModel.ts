import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastMinFieldsModelBase } from "./PokemonV2PokemontypepastMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastMinFieldsModel */
export interface PokemonV2PokemontypepastMinFieldsModelType extends Instance<typeof PokemonV2PokemontypepastMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastMinFieldsModel */
export { selectFromPokemonV2PokemontypepastMinFields, pokemonV2PokemontypepastMinFieldsModelPrimitives, PokemonV2PokemontypepastMinFieldsModelSelector } from "./PokemonV2PokemontypepastMinFieldsModel.base"

/**
 * PokemonV2PokemontypepastMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemontypepastMinFieldsModel = PokemonV2PokemontypepastMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
