import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionAggregateModelBase } from "./PokemonV2EncounterconditionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionAggregateModel */
export interface PokemonV2EncounterconditionAggregateModelType extends Instance<typeof PokemonV2EncounterconditionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionAggregateModel */
export { selectFromPokemonV2EncounterconditionAggregate, pokemonV2EncounterconditionAggregateModelPrimitives, PokemonV2EncounterconditionAggregateModelSelector } from "./PokemonV2EncounterconditionAggregateModel.base"

/**
 * PokemonV2EncounterconditionAggregateModel
 *
 * aggregated selection of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionAggregateModel = PokemonV2EncounterconditionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
