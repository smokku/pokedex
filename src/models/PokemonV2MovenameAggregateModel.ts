import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameAggregateModelBase } from "./PokemonV2MovenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameAggregateModel */
export interface PokemonV2MovenameAggregateModelType extends Instance<typeof PokemonV2MovenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameAggregateModel */
export { selectFromPokemonV2MovenameAggregate, pokemonV2MovenameAggregateModelPrimitives, PokemonV2MovenameAggregateModelSelector } from "./PokemonV2MovenameAggregateModel.base"

/**
 * PokemonV2MovenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movename"
 */
export const PokemonV2MovenameAggregateModel = PokemonV2MovenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
