import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaAggregateModelBase } from "./PokemonV2LocationareaAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaAggregateModel */
export interface PokemonV2LocationareaAggregateModelType extends Instance<typeof PokemonV2LocationareaAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaAggregateModel */
export { selectFromPokemonV2LocationareaAggregate, pokemonV2LocationareaAggregateModelPrimitives, PokemonV2LocationareaAggregateModelSelector } from "./PokemonV2LocationareaAggregateModel.base"

/**
 * PokemonV2LocationareaAggregateModel
 *
 * aggregated selection of "pokemon_v2_locationarea"
 */
export const PokemonV2LocationareaAggregateModel = PokemonV2LocationareaAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
