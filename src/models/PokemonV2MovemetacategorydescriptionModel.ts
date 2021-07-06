import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionModelBase } from "./PokemonV2MovemetacategorydescriptionModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionModel */
export interface PokemonV2MovemetacategorydescriptionModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionModel */
export { selectFromPokemonV2Movemetacategorydescription, pokemonV2MovemetacategorydescriptionModelPrimitives, PokemonV2MovemetacategorydescriptionModelSelector } from "./PokemonV2MovemetacategorydescriptionModel.base"

/**
 * PokemonV2MovemetacategorydescriptionModel
 *
 * columns and relationships of "pokemon_v2_movemetacategorydescription"
 */
export const PokemonV2MovemetacategorydescriptionModel = PokemonV2MovemetacategorydescriptionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
