import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionSumFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionSumFieldsModel */
export interface PokemonV2MovemetacategorydescriptionSumFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionSumFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionSumFields, pokemonV2MovemetacategorydescriptionSumFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionSumFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionSumFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetacategorydescriptionSumFieldsModel = PokemonV2MovemetacategorydescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
