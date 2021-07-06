import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionStddevPopFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionStddevPopFieldsModel */
export interface PokemonV2MovemetacategorydescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionStddevPopFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionStddevPopFields, pokemonV2MovemetacategorydescriptionStddevPopFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionStddevPopFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetacategorydescriptionStddevPopFieldsModel = PokemonV2MovemetacategorydescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
