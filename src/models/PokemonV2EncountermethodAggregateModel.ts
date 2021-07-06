import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodAggregateModelBase } from "./PokemonV2EncountermethodAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodAggregateModel */
export interface PokemonV2EncountermethodAggregateModelType extends Instance<typeof PokemonV2EncountermethodAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodAggregateModel */
export { selectFromPokemonV2EncountermethodAggregate, pokemonV2EncountermethodAggregateModelPrimitives, PokemonV2EncountermethodAggregateModelSelector } from "./PokemonV2EncountermethodAggregateModel.base"

/**
 * PokemonV2EncountermethodAggregateModel
 *
 * aggregated selection of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodAggregateModel = PokemonV2EncountermethodAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
