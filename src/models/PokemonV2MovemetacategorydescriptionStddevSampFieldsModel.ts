import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionStddevSampFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionStddevSampFieldsModel */
export interface PokemonV2MovemetacategorydescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionStddevSampFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionStddevSampFields, pokemonV2MovemetacategorydescriptionStddevSampFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionStddevSampFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetacategorydescriptionStddevSampFieldsModel = PokemonV2MovemetacategorydescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
