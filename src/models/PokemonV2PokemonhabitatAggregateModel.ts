import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatAggregateModelBase } from "./PokemonV2PokemonhabitatAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatAggregateModel */
export interface PokemonV2PokemonhabitatAggregateModelType extends Instance<typeof PokemonV2PokemonhabitatAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatAggregateModel */
export { selectFromPokemonV2PokemonhabitatAggregate, pokemonV2PokemonhabitatAggregateModelPrimitives, PokemonV2PokemonhabitatAggregateModelSelector } from "./PokemonV2PokemonhabitatAggregateModel.base"

/**
 * PokemonV2PokemonhabitatAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonhabitat"
 */
export const PokemonV2PokemonhabitatAggregateModel = PokemonV2PokemonhabitatAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
