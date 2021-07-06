import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceAggregateModelBase } from "./PokemonV2ExperienceAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceAggregateModel */
export interface PokemonV2ExperienceAggregateModelType extends Instance<typeof PokemonV2ExperienceAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceAggregateModel */
export { selectFromPokemonV2ExperienceAggregate, pokemonV2ExperienceAggregateModelPrimitives, PokemonV2ExperienceAggregateModelSelector } from "./PokemonV2ExperienceAggregateModel.base"

/**
 * PokemonV2ExperienceAggregateModel
 *
 * aggregated selection of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceAggregateModel = PokemonV2ExperienceAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
