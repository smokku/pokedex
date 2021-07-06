import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameAggregateModelBase } from "./PokemonV2NaturenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameAggregateModel */
export interface PokemonV2NaturenameAggregateModelType extends Instance<typeof PokemonV2NaturenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameAggregateModel */
export { selectFromPokemonV2NaturenameAggregate, pokemonV2NaturenameAggregateModelPrimitives, PokemonV2NaturenameAggregateModelSelector } from "./PokemonV2NaturenameAggregateModel.base"

/**
 * PokemonV2NaturenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_naturename"
 */
export const PokemonV2NaturenameAggregateModel = PokemonV2NaturenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
