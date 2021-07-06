import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionAggregateModelBase } from "./PokemonV2MovemetacategorydescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionAggregateModel */
export interface PokemonV2MovemetacategorydescriptionAggregateModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionAggregateModel */
export { selectFromPokemonV2MovemetacategorydescriptionAggregate, pokemonV2MovemetacategorydescriptionAggregateModelPrimitives, PokemonV2MovemetacategorydescriptionAggregateModelSelector } from "./PokemonV2MovemetacategorydescriptionAggregateModel.base"

/**
 * PokemonV2MovemetacategorydescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionAggregateModel = PokemonV2MovemetacategorydescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
