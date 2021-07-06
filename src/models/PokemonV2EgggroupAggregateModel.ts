import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupAggregateModelBase } from "./PokemonV2EgggroupAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupAggregateModel */
export interface PokemonV2EgggroupAggregateModelType extends Instance<typeof PokemonV2EgggroupAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupAggregateModel */
export { selectFromPokemonV2EgggroupAggregate, pokemonV2EgggroupAggregateModelPrimitives, PokemonV2EgggroupAggregateModelSelector } from "./PokemonV2EgggroupAggregateModel.base"

/**
 * PokemonV2EgggroupAggregateModel
 *
 * aggregated selection of "pokemon_v2_egggroup"
 */
export const PokemonV2EgggroupAggregateModel = PokemonV2EgggroupAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
