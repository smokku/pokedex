import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapAggregateModelBase } from "./PokemonV2EncounterconditionvaluemapAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapAggregateModel */
export interface PokemonV2EncounterconditionvaluemapAggregateModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapAggregateModel */
export { selectFromPokemonV2EncounterconditionvaluemapAggregate, pokemonV2EncounterconditionvaluemapAggregateModelPrimitives, PokemonV2EncounterconditionvaluemapAggregateModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateModel.base"

/**
 * PokemonV2EncounterconditionvaluemapAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapAggregateModel = PokemonV2EncounterconditionvaluemapAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
