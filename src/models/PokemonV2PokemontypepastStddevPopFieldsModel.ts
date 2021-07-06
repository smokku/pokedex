import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastStddevPopFieldsModelBase } from "./PokemonV2PokemontypepastStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastStddevPopFieldsModel */
export interface PokemonV2PokemontypepastStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemontypepastStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastStddevPopFieldsModel */
export { selectFromPokemonV2PokemontypepastStddevPopFields, pokemonV2PokemontypepastStddevPopFieldsModelPrimitives, PokemonV2PokemontypepastStddevPopFieldsModelSelector } from "./PokemonV2PokemontypepastStddevPopFieldsModel.base"

/**
 * PokemonV2PokemontypepastStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemontypepastStddevPopFieldsModel = PokemonV2PokemontypepastStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
