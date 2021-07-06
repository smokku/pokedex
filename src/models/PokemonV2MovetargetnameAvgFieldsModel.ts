import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameAvgFieldsModelBase } from "./PokemonV2MovetargetnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameAvgFieldsModel */
export interface PokemonV2MovetargetnameAvgFieldsModelType extends Instance<typeof PokemonV2MovetargetnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameAvgFieldsModel */
export { selectFromPokemonV2MovetargetnameAvgFields, pokemonV2MovetargetnameAvgFieldsModelPrimitives, PokemonV2MovetargetnameAvgFieldsModelSelector } from "./PokemonV2MovetargetnameAvgFieldsModel.base"

/**
 * PokemonV2MovetargetnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovetargetnameAvgFieldsModel = PokemonV2MovetargetnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
