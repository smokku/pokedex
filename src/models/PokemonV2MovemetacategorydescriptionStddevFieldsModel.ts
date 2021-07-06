import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionStddevFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionStddevFieldsModel */
export interface PokemonV2MovemetacategorydescriptionStddevFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionStddevFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionStddevFields, pokemonV2MovemetacategorydescriptionStddevFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionStddevFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetacategorydescriptionStddevFieldsModel = PokemonV2MovemetacategorydescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
