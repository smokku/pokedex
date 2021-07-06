import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastAvgFieldsModelBase } from "./PokemonV2PokemontypepastAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastAvgFieldsModel */
export interface PokemonV2PokemontypepastAvgFieldsModelType extends Instance<typeof PokemonV2PokemontypepastAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastAvgFieldsModel */
export { selectFromPokemonV2PokemontypepastAvgFields, pokemonV2PokemontypepastAvgFieldsModelPrimitives, PokemonV2PokemontypepastAvgFieldsModelSelector } from "./PokemonV2PokemontypepastAvgFieldsModel.base"

/**
 * PokemonV2PokemontypepastAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemontypepastAvgFieldsModel = PokemonV2PokemontypepastAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
