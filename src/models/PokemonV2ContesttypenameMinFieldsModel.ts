import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameMinFieldsModelBase } from "./PokemonV2ContesttypenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameMinFieldsModel */
export interface PokemonV2ContesttypenameMinFieldsModelType extends Instance<typeof PokemonV2ContesttypenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameMinFieldsModel */
export { selectFromPokemonV2ContesttypenameMinFields, pokemonV2ContesttypenameMinFieldsModelPrimitives, PokemonV2ContesttypenameMinFieldsModelSelector } from "./PokemonV2ContesttypenameMinFieldsModel.base"

/**
 * PokemonV2ContesttypenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContesttypenameMinFieldsModel = PokemonV2ContesttypenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
