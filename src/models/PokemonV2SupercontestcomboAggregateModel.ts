import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboAggregateModelBase } from "./PokemonV2SupercontestcomboAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboAggregateModel */
export interface PokemonV2SupercontestcomboAggregateModelType extends Instance<typeof PokemonV2SupercontestcomboAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboAggregateModel */
export { selectFromPokemonV2SupercontestcomboAggregate, pokemonV2SupercontestcomboAggregateModelPrimitives, PokemonV2SupercontestcomboAggregateModelSelector } from "./PokemonV2SupercontestcomboAggregateModel.base"

/**
 * PokemonV2SupercontestcomboAggregateModel
 *
 * aggregated selection of "pokemon_v2_supercontestcombo"
 */
export const PokemonV2SupercontestcomboAggregateModel = PokemonV2SupercontestcomboAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
