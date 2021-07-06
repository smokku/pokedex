import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameAggregateModelBase } from "./PokemonV2AbilitynameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameAggregateModel */
export interface PokemonV2AbilitynameAggregateModelType extends Instance<typeof PokemonV2AbilitynameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameAggregateModel */
export { selectFromPokemonV2AbilitynameAggregate, pokemonV2AbilitynameAggregateModelPrimitives, PokemonV2AbilitynameAggregateModelSelector } from "./PokemonV2AbilitynameAggregateModel.base"

/**
 * PokemonV2AbilitynameAggregateModel
 *
 * aggregated selection of "pokemon_v2_abilityname"
 */
export const PokemonV2AbilitynameAggregateModel = PokemonV2AbilitynameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
