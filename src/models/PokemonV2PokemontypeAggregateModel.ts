import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeAggregateModelBase } from "./PokemonV2PokemontypeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeAggregateModel */
export interface PokemonV2PokemontypeAggregateModelType extends Instance<typeof PokemonV2PokemontypeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeAggregateModel */
export { selectFromPokemonV2PokemontypeAggregate, pokemonV2PokemontypeAggregateModelPrimitives, PokemonV2PokemontypeAggregateModelSelector } from "./PokemonV2PokemontypeAggregateModel.base"

/**
 * PokemonV2PokemontypeAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemontype"
 */
export const PokemonV2PokemontypeAggregateModel = PokemonV2PokemontypeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
