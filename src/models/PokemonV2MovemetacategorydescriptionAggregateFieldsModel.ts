import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionAggregateFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionAggregateFieldsModel */
export interface PokemonV2MovemetacategorydescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionAggregateFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionAggregateFields, pokemonV2MovemetacategorydescriptionAggregateFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionAggregateFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionAggregateFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionAggregateFieldsModel = PokemonV2MovemetacategorydescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
