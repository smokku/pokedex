import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameAggregateModelBase } from "./PokemonV2ItempocketnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameAggregateModel */
export interface PokemonV2ItempocketnameAggregateModelType extends Instance<typeof PokemonV2ItempocketnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameAggregateModel */
export { selectFromPokemonV2ItempocketnameAggregate, pokemonV2ItempocketnameAggregateModelPrimitives, PokemonV2ItempocketnameAggregateModelSelector } from "./PokemonV2ItempocketnameAggregateModel.base"

/**
 * PokemonV2ItempocketnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameAggregateModel = PokemonV2ItempocketnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
