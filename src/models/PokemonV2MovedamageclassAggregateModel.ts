import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassAggregateModelBase } from "./PokemonV2MovedamageclassAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassAggregateModel */
export interface PokemonV2MovedamageclassAggregateModelType extends Instance<typeof PokemonV2MovedamageclassAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassAggregateModel */
export { selectFromPokemonV2MovedamageclassAggregate, pokemonV2MovedamageclassAggregateModelPrimitives, PokemonV2MovedamageclassAggregateModelSelector } from "./PokemonV2MovedamageclassAggregateModel.base"

/**
 * PokemonV2MovedamageclassAggregateModel
 *
 * aggregated selection of "pokemon_v2_movedamageclass"
 */
export const PokemonV2MovedamageclassAggregateModel = PokemonV2MovedamageclassAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
