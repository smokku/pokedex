import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastSumFieldsModelBase } from "./PokemonV2PokemontypepastSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastSumFieldsModel */
export interface PokemonV2PokemontypepastSumFieldsModelType extends Instance<typeof PokemonV2PokemontypepastSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastSumFieldsModel */
export { selectFromPokemonV2PokemontypepastSumFields, pokemonV2PokemontypepastSumFieldsModelPrimitives, PokemonV2PokemontypepastSumFieldsModelSelector } from "./PokemonV2PokemontypepastSumFieldsModel.base"

/**
 * PokemonV2PokemontypepastSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemontypepastSumFieldsModel = PokemonV2PokemontypepastSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
