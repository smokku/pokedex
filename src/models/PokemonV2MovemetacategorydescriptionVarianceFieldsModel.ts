import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategorydescriptionVarianceFieldsModelBase } from "./PokemonV2MovemetacategorydescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategorydescriptionVarianceFieldsModel */
export interface PokemonV2MovemetacategorydescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetacategorydescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategorydescriptionVarianceFieldsModel */
export { selectFromPokemonV2MovemetacategorydescriptionVarianceFields, pokemonV2MovemetacategorydescriptionVarianceFieldsModelPrimitives, PokemonV2MovemetacategorydescriptionVarianceFieldsModelSelector } from "./PokemonV2MovemetacategorydescriptionVarianceFieldsModel.base"

/**
 * PokemonV2MovemetacategorydescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetacategorydescriptionVarianceFieldsModel = PokemonV2MovemetacategorydescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
