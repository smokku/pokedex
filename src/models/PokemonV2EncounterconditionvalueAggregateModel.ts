import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueAggregateModelBase } from "./PokemonV2EncounterconditionvalueAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueAggregateModel */
export interface PokemonV2EncounterconditionvalueAggregateModelType extends Instance<typeof PokemonV2EncounterconditionvalueAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueAggregateModel */
export { selectFromPokemonV2EncounterconditionvalueAggregate, pokemonV2EncounterconditionvalueAggregateModelPrimitives, PokemonV2EncounterconditionvalueAggregateModelSelector } from "./PokemonV2EncounterconditionvalueAggregateModel.base"

/**
 * PokemonV2EncounterconditionvalueAggregateModel
 *
 * aggregated selection of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueAggregateModel = PokemonV2EncounterconditionvalueAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
