import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameMinFieldsModelBase } from "./PokemonV2RegionnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameMinFieldsModel */
export interface PokemonV2RegionnameMinFieldsModelType extends Instance<typeof PokemonV2RegionnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameMinFieldsModel */
export { selectFromPokemonV2RegionnameMinFields, pokemonV2RegionnameMinFieldsModelPrimitives, PokemonV2RegionnameMinFieldsModelSelector } from "./PokemonV2RegionnameMinFieldsModel.base"

/**
 * PokemonV2RegionnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2RegionnameMinFieldsModel = PokemonV2RegionnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
