import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameMinFieldsModelBase } from "./PokemonV2TypenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameMinFieldsModel */
export interface PokemonV2TypenameMinFieldsModelType extends Instance<typeof PokemonV2TypenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameMinFieldsModel */
export { selectFromPokemonV2TypenameMinFields, pokemonV2TypenameMinFieldsModelPrimitives, PokemonV2TypenameMinFieldsModelSelector } from "./PokemonV2TypenameMinFieldsModel.base"

/**
 * PokemonV2TypenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2TypenameMinFieldsModel = PokemonV2TypenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
