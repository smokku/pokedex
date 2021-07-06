import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameMinFieldsModelBase } from "./PokemonV2ItemnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameMinFieldsModel */
export interface PokemonV2ItemnameMinFieldsModelType extends Instance<typeof PokemonV2ItemnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameMinFieldsModel */
export { selectFromPokemonV2ItemnameMinFields, pokemonV2ItemnameMinFieldsModelPrimitives, PokemonV2ItemnameMinFieldsModelSelector } from "./PokemonV2ItemnameMinFieldsModel.base"

/**
 * PokemonV2ItemnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemnameMinFieldsModel = PokemonV2ItemnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
