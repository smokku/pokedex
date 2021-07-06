import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameAvgFieldsModelBase } from "./PokemonV2MovenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameAvgFieldsModel */
export interface PokemonV2MovenameAvgFieldsModelType extends Instance<typeof PokemonV2MovenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameAvgFieldsModel */
export { selectFromPokemonV2MovenameAvgFields, pokemonV2MovenameAvgFieldsModelPrimitives, PokemonV2MovenameAvgFieldsModelSelector } from "./PokemonV2MovenameAvgFieldsModel.base"

/**
 * PokemonV2MovenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovenameAvgFieldsModel = PokemonV2MovenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
