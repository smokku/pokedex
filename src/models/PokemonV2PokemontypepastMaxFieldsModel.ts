import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastMaxFieldsModelBase } from "./PokemonV2PokemontypepastMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastMaxFieldsModel */
export interface PokemonV2PokemontypepastMaxFieldsModelType extends Instance<typeof PokemonV2PokemontypepastMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastMaxFieldsModel */
export { selectFromPokemonV2PokemontypepastMaxFields, pokemonV2PokemontypepastMaxFieldsModelPrimitives, PokemonV2PokemontypepastMaxFieldsModelSelector } from "./PokemonV2PokemontypepastMaxFieldsModel.base"

/**
 * PokemonV2PokemontypepastMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemontypepastMaxFieldsModel = PokemonV2PokemontypepastMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
