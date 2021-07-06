import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionVarSampFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionVarSampFieldsModel */
export interface PokemonV2MovemetacategorydescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionVarSampFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionVarSampFields, pokemonV2MovemetacategorydescriptionVarSampFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionVarSampFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarSampFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovemetacategorydescriptionVarSampFieldsModel = PokemonV2MovemetacategorydescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
