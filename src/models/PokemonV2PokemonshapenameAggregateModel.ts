import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameAggregateModelBase } from "./PokemonV2PokemonshapenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameAggregateModel */
export interface PokemonV2PokemonshapenameAggregateModelType extends Instance<typeof PokemonV2PokemonshapenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameAggregateModel */
export { selectFromPokemonV2PokemonshapenameAggregate, pokemonV2PokemonshapenameAggregateModelPrimitives, PokemonV2PokemonshapenameAggregateModelSelector } from "./PokemonV2PokemonshapenameAggregateModel.base"

/**
 * PokemonV2PokemonshapenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameAggregateModel = PokemonV2PokemonshapenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
