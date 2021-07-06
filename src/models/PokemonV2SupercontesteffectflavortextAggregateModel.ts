import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextAggregateModelBase } from "./PokemonV2SupercontesteffectflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextAggregateModel */
export interface PokemonV2SupercontesteffectflavortextAggregateModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextAggregateModel */
export { selectFromPokemonV2SupercontesteffectflavortextAggregate, pokemonV2SupercontesteffectflavortextAggregateModelPrimitives, PokemonV2SupercontesteffectflavortextAggregateModelSelector } from "./PokemonV2SupercontesteffectflavortextAggregateModel.base"

/**
 * PokemonV2SupercontesteffectflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_supercontesteffectflavortext"
 */
export const PokemonV2SupercontesteffectflavortextAggregateModel = PokemonV2SupercontesteffectflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
