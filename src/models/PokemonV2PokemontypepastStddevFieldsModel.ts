import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastStddevFieldsModelBase } from "./PokemonV2PokemontypepastStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastStddevFieldsModel */
export interface PokemonV2PokemontypepastStddevFieldsModelType extends Instance<typeof PokemonV2PokemontypepastStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastStddevFieldsModel */
export { selectFromPokemonV2PokemontypepastStddevFields, pokemonV2PokemontypepastStddevFieldsModelPrimitives, PokemonV2PokemontypepastStddevFieldsModelSelector } from "./PokemonV2PokemontypepastStddevFieldsModel.base"

/**
 * PokemonV2PokemontypepastStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemontypepastStddevFieldsModel = PokemonV2PokemontypepastStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
