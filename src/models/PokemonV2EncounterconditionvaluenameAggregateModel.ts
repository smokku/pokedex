import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameAggregateModelBase } from "./PokemonV2EncounterconditionvaluenameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameAggregateModel */
export interface PokemonV2EncounterconditionvaluenameAggregateModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameAggregateModel */
export { selectFromPokemonV2EncounterconditionvaluenameAggregate, pokemonV2EncounterconditionvaluenameAggregateModelPrimitives, PokemonV2EncounterconditionvaluenameAggregateModelSelector } from "./PokemonV2EncounterconditionvaluenameAggregateModel.base"

/**
 * PokemonV2EncounterconditionvaluenameAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameAggregateModel = PokemonV2EncounterconditionvaluenameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
