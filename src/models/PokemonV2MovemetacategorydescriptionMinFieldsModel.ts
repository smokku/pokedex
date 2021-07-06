import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionMinFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionMinFieldsModel */
export interface PokemonV2MovemetacategorydescriptionMinFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionMinFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionMinFields, pokemonV2MovemetacategorydescriptionMinFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionMinFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionMinFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetacategorydescriptionMinFieldsModel = PokemonV2MovemetacategorydescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
