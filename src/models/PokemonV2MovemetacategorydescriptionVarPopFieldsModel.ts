import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionVarPopFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionVarPopFieldsModel */
export interface PokemonV2MovemetacategorydescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionVarPopFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionVarPopFields, pokemonV2MovemetacategorydescriptionVarPopFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionVarPopFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarPopFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetacategorydescriptionVarPopFieldsModel = PokemonV2MovemetacategorydescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
