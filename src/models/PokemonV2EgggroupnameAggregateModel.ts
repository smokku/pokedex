import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameAggregateModelBase } from "./PokemonV2EgggroupnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameAggregateModel */
export interface PokemonV2EgggroupnameAggregateModelType extends Instance<typeof PokemonV2EgggroupnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameAggregateModel */
export { selectFromPokemonV2EgggroupnameAggregate, pokemonV2EgggroupnameAggregateModelPrimitives, PokemonV2EgggroupnameAggregateModelSelector } from "./PokemonV2EgggroupnameAggregateModel.base"

/**
 * PokemonV2EgggroupnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_egggroupname"
 */
export const PokemonV2EgggroupnameAggregateModel = PokemonV2EgggroupnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
