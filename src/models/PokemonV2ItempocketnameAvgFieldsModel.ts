import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameAvgFieldsModelBase } from "./PokemonV2ItempocketnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameAvgFieldsModel */
export interface PokemonV2ItempocketnameAvgFieldsModelType extends Instance<typeof PokemonV2ItempocketnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameAvgFieldsModel */
export { selectFromPokemonV2ItempocketnameAvgFields, pokemonV2ItempocketnameAvgFieldsModelPrimitives, PokemonV2ItempocketnameAvgFieldsModelSelector } from "./PokemonV2ItempocketnameAvgFieldsModel.base"

/**
 * PokemonV2ItempocketnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItempocketnameAvgFieldsModel = PokemonV2ItempocketnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
