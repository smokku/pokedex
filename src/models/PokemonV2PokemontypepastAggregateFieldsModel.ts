import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastAggregateFieldsModelBase } from "./PokemonV2PokemontypepastAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastAggregateFieldsModel */
export interface PokemonV2PokemontypepastAggregateFieldsModelType extends Instance<typeof PokemonV2PokemontypepastAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastAggregateFieldsModel */
export { selectFromPokemonV2PokemontypepastAggregateFields, pokemonV2PokemontypepastAggregateFieldsModelPrimitives, PokemonV2PokemontypepastAggregateFieldsModelSelector } from "./PokemonV2PokemontypepastAggregateFieldsModel.base"

/**
 * PokemonV2PokemontypepastAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastAggregateFieldsModel = PokemonV2PokemontypepastAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
