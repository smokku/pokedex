import { Instance } from "mobx-state-tree"
import { PokemonV2TypeMinFieldsModelBase } from "./PokemonV2TypeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeMinFieldsModel */
export interface PokemonV2TypeMinFieldsModelType extends Instance<typeof PokemonV2TypeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeMinFieldsModel */
export { selectFromPokemonV2TypeMinFields, pokemonV2TypeMinFieldsModelPrimitives, PokemonV2TypeMinFieldsModelSelector } from "./PokemonV2TypeMinFieldsModel.base"

/**
 * PokemonV2TypeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2TypeMinFieldsModel = PokemonV2TypeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
