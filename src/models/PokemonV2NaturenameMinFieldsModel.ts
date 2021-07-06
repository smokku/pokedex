import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameMinFieldsModelBase } from "./PokemonV2NaturenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameMinFieldsModel */
export interface PokemonV2NaturenameMinFieldsModelType extends Instance<typeof PokemonV2NaturenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameMinFieldsModel */
export { selectFromPokemonV2NaturenameMinFields, pokemonV2NaturenameMinFieldsModelPrimitives, PokemonV2NaturenameMinFieldsModelSelector } from "./PokemonV2NaturenameMinFieldsModel.base"

/**
 * PokemonV2NaturenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2NaturenameMinFieldsModel = PokemonV2NaturenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
