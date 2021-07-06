import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationAggregateFieldsModelBase } from "./PokemonV2GenerationAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationAggregateFieldsModel */
export interface PokemonV2GenerationAggregateFieldsModelType extends Instance<typeof PokemonV2GenerationAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationAggregateFieldsModel */
export { selectFromPokemonV2GenerationAggregateFields, pokemonV2GenerationAggregateFieldsModelPrimitives, PokemonV2GenerationAggregateFieldsModelSelector } from "./PokemonV2GenerationAggregateFieldsModel.base"

/**
 * PokemonV2GenerationAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_generation"
 */
export const PokemonV2GenerationAggregateFieldsModel = PokemonV2GenerationAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
