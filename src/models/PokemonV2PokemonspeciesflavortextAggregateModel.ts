import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesflavortextAggregateModelBase } from "./PokemonV2PokemonspeciesflavortextAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesflavortextAggregateModel */
export interface PokemonV2PokemonspeciesflavortextAggregateModelType extends Instance<typeof PokemonV2PokemonspeciesflavortextAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesflavortextAggregateModel */
export { selectFromPokemonV2PokemonspeciesflavortextAggregate, pokemonV2PokemonspeciesflavortextAggregateModelPrimitives, PokemonV2PokemonspeciesflavortextAggregateModelSelector } from "./PokemonV2PokemonspeciesflavortextAggregateModel.base"

/**
 * PokemonV2PokemonspeciesflavortextAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesflavortext"
 */
export const PokemonV2PokemonspeciesflavortextAggregateModel = PokemonV2PokemonspeciesflavortextAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
