import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameAggregateModelBase } from "./PokemonV2PokemonhabitatnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameAggregateModel */
export interface PokemonV2PokemonhabitatnameAggregateModelType extends Instance<typeof PokemonV2PokemonhabitatnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameAggregateModel */
export { selectFromPokemonV2PokemonhabitatnameAggregate, pokemonV2PokemonhabitatnameAggregateModelPrimitives, PokemonV2PokemonhabitatnameAggregateModelSelector } from "./PokemonV2PokemonhabitatnameAggregateModel.base"

/**
 * PokemonV2PokemonhabitatnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonhabitatname"
 */
export const PokemonV2PokemonhabitatnameAggregateModel = PokemonV2PokemonhabitatnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
