import { Instance } from "mobx-state-tree"
import { PokemonV2ExperienceAggregateFieldsModelBase } from "./PokemonV2ExperienceAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ExperienceAggregateFieldsModel */
export interface PokemonV2ExperienceAggregateFieldsModelType extends Instance<typeof PokemonV2ExperienceAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ExperienceAggregateFieldsModel */
export { selectFromPokemonV2ExperienceAggregateFields, pokemonV2ExperienceAggregateFieldsModelPrimitives, PokemonV2ExperienceAggregateFieldsModelSelector } from "./PokemonV2ExperienceAggregateFieldsModel.base"

/**
 * PokemonV2ExperienceAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_experience"
 */
export const PokemonV2ExperienceAggregateFieldsModel = PokemonV2ExperienceAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
