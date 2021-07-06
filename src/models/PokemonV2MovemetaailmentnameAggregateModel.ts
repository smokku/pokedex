import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameAggregateModelBase } from "./PokemonV2MovemetaailmentnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameAggregateModel */
export interface PokemonV2MovemetaailmentnameAggregateModelType extends Instance<typeof PokemonV2MovemetaailmentnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameAggregateModel */
export { selectFromPokemonV2MovemetaailmentnameAggregate, pokemonV2MovemetaailmentnameAggregateModelPrimitives, PokemonV2MovemetaailmentnameAggregateModelSelector } from "./PokemonV2MovemetaailmentnameAggregateModel.base"

/**
 * PokemonV2MovemetaailmentnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemetaailmentname"
 */
export const PokemonV2MovemetaailmentnameAggregateModel = PokemonV2MovemetaailmentnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
