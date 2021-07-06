import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameMinFieldsModelBase } from "./PokemonV2MovenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameMinFieldsModel */
export interface PokemonV2MovenameMinFieldsModelType extends Instance<typeof PokemonV2MovenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameMinFieldsModel */
export { selectFromPokemonV2MovenameMinFields, pokemonV2MovenameMinFieldsModelPrimitives, PokemonV2MovenameMinFieldsModelSelector } from "./PokemonV2MovenameMinFieldsModel.base"

/**
 * PokemonV2MovenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovenameMinFieldsModel = PokemonV2MovenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
