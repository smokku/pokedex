import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastAggregateModelBase } from "./PokemonV2PokemontypepastAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastAggregateModel */
export interface PokemonV2PokemontypepastAggregateModelType extends Instance<typeof PokemonV2PokemontypepastAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastAggregateModel */
export { selectFromPokemonV2PokemontypepastAggregate, pokemonV2PokemontypepastAggregateModelPrimitives, PokemonV2PokemontypepastAggregateModelSelector } from "./PokemonV2PokemontypepastAggregateModel.base"

/**
 * PokemonV2PokemontypepastAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemontypepast"
 */
export const PokemonV2PokemontypepastAggregateModel = PokemonV2PokemontypepastAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
