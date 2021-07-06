import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameMinFieldsModelBase } from "./PokemonV2ItempocketnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameMinFieldsModel */
export interface PokemonV2ItempocketnameMinFieldsModelType extends Instance<typeof PokemonV2ItempocketnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameMinFieldsModel */
export { selectFromPokemonV2ItempocketnameMinFields, pokemonV2ItempocketnameMinFieldsModelPrimitives, PokemonV2ItempocketnameMinFieldsModelSelector } from "./PokemonV2ItempocketnameMinFieldsModel.base"

/**
 * PokemonV2ItempocketnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItempocketnameMinFieldsModel = PokemonV2ItempocketnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
