import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameMinFieldsModelBase } from "./PokemonV2MovetargetnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameMinFieldsModel */
export interface PokemonV2MovetargetnameMinFieldsModelType extends Instance<typeof PokemonV2MovetargetnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameMinFieldsModel */
export { selectFromPokemonV2MovetargetnameMinFields, pokemonV2MovetargetnameMinFieldsModelPrimitives, PokemonV2MovetargetnameMinFieldsModelSelector } from "./PokemonV2MovetargetnameMinFieldsModel.base"

/**
 * PokemonV2MovetargetnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovetargetnameMinFieldsModel = PokemonV2MovetargetnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
