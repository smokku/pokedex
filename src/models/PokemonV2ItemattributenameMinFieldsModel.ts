import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameMinFieldsModelBase } from "./PokemonV2ItemattributenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameMinFieldsModel */
export interface PokemonV2ItemattributenameMinFieldsModelType extends Instance<typeof PokemonV2ItemattributenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameMinFieldsModel */
export { selectFromPokemonV2ItemattributenameMinFields, pokemonV2ItemattributenameMinFieldsModelPrimitives, PokemonV2ItemattributenameMinFieldsModelSelector } from "./PokemonV2ItemattributenameMinFieldsModel.base"

/**
 * PokemonV2ItemattributenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributenameMinFieldsModel = PokemonV2ItemattributenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
