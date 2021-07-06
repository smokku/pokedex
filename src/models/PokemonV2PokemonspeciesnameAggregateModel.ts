import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameAggregateModelBase } from "./PokemonV2PokemonspeciesnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameAggregateModel */
export interface PokemonV2PokemonspeciesnameAggregateModelType extends Instance<typeof PokemonV2PokemonspeciesnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameAggregateModel */
export { selectFromPokemonV2PokemonspeciesnameAggregate, pokemonV2PokemonspeciesnameAggregateModelPrimitives, PokemonV2PokemonspeciesnameAggregateModelSelector } from "./PokemonV2PokemonspeciesnameAggregateModel.base"

/**
 * PokemonV2PokemonspeciesnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameAggregateModel = PokemonV2PokemonspeciesnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
