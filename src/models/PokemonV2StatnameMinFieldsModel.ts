import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameMinFieldsModelBase } from "./PokemonV2StatnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameMinFieldsModel */
export interface PokemonV2StatnameMinFieldsModelType extends Instance<typeof PokemonV2StatnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameMinFieldsModel */
export { selectFromPokemonV2StatnameMinFields, pokemonV2StatnameMinFieldsModelPrimitives, PokemonV2StatnameMinFieldsModelSelector } from "./PokemonV2StatnameMinFieldsModel.base"

/**
 * PokemonV2StatnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2StatnameMinFieldsModel = PokemonV2StatnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
