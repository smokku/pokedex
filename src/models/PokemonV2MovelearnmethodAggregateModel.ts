import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodAggregateModelBase } from "./PokemonV2MovelearnmethodAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodAggregateModel */
export interface PokemonV2MovelearnmethodAggregateModelType extends Instance<typeof PokemonV2MovelearnmethodAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodAggregateModel */
export { selectFromPokemonV2MovelearnmethodAggregate, pokemonV2MovelearnmethodAggregateModelPrimitives, PokemonV2MovelearnmethodAggregateModelSelector } from "./PokemonV2MovelearnmethodAggregateModel.base"

/**
 * PokemonV2MovelearnmethodAggregateModel
 *
 * aggregated selection of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodAggregateModel = PokemonV2MovelearnmethodAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
