import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameAvgFieldsModelBase } from "./PokemonV2NaturenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameAvgFieldsModel */
export interface PokemonV2NaturenameAvgFieldsModelType extends Instance<typeof PokemonV2NaturenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameAvgFieldsModel */
export { selectFromPokemonV2NaturenameAvgFields, pokemonV2NaturenameAvgFieldsModelPrimitives, PokemonV2NaturenameAvgFieldsModelSelector } from "./PokemonV2NaturenameAvgFieldsModel.base"

/**
 * PokemonV2NaturenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2NaturenameAvgFieldsModel = PokemonV2NaturenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
