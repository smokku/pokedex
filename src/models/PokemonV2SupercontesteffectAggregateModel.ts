import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectAggregateModelBase } from "./PokemonV2SupercontesteffectAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectAggregateModel */
export interface PokemonV2SupercontesteffectAggregateModelType extends Instance<typeof PokemonV2SupercontesteffectAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectAggregateModel */
export { selectFromPokemonV2SupercontesteffectAggregate, pokemonV2SupercontesteffectAggregateModelPrimitives, PokemonV2SupercontesteffectAggregateModelSelector } from "./PokemonV2SupercontesteffectAggregateModel.base"

/**
 * PokemonV2SupercontesteffectAggregateModel
 *
 * aggregated selection of "pokemon_v2_supercontesteffect"
 */
export const PokemonV2SupercontesteffectAggregateModel = PokemonV2SupercontesteffectAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
