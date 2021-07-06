import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionAggregateModelBase } from "./PokemonV2PokedexdescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionAggregateModel */
export interface PokemonV2PokedexdescriptionAggregateModelType extends Instance<typeof PokemonV2PokedexdescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionAggregateModel */
export { selectFromPokemonV2PokedexdescriptionAggregate, pokemonV2PokedexdescriptionAggregateModelPrimitives, PokemonV2PokedexdescriptionAggregateModelSelector } from "./PokemonV2PokedexdescriptionAggregateModel.base"

/**
 * PokemonV2PokedexdescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokedexdescription"
 */
export const PokemonV2PokedexdescriptionAggregateModel = PokemonV2PokedexdescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
