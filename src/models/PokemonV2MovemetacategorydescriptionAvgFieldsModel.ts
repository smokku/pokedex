import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionAvgFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionAvgFieldsModel */
export interface PokemonV2MovemetacategorydescriptionAvgFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionAvgFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionAvgFields, pokemonV2MovemetacategorydescriptionAvgFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionAvgFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionAvgFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetacategorydescriptionAvgFieldsModel = PokemonV2MovemetacategorydescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
