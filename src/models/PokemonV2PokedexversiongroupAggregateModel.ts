import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupAggregateModelBase } from "./PokemonV2PokedexversiongroupAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupAggregateModel */
export interface PokemonV2PokedexversiongroupAggregateModelType extends Instance<typeof PokemonV2PokedexversiongroupAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupAggregateModel */
export { selectFromPokemonV2PokedexversiongroupAggregate, pokemonV2PokedexversiongroupAggregateModelPrimitives, PokemonV2PokedexversiongroupAggregateModelSelector } from "./PokemonV2PokedexversiongroupAggregateModel.base"

/**
 * PokemonV2PokedexversiongroupAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupAggregateModel = PokemonV2PokedexversiongroupAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
