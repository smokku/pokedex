import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionMaxFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionMaxFieldsModel */
export interface PokemonV2MovemetacategorydescriptionMaxFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionMaxFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionMaxFields, pokemonV2MovemetacategorydescriptionMaxFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionMaxFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionMaxFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetacategorydescriptionMaxFieldsModel = PokemonV2MovemetacategorydescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
