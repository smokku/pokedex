import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameStddevFieldsModelBase } from "./PokemonV2MovenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameStddevFieldsModel */
export interface PokemonV2MovenameStddevFieldsModelType extends Instance<typeof PokemonV2MovenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameStddevFieldsModel */
export { selectFromPokemonV2MovenameStddevFields, pokemonV2MovenameStddevFieldsModelPrimitives, PokemonV2MovenameStddevFieldsModelSelector } from "./PokemonV2MovenameStddevFieldsModel.base"

/**
 * PokemonV2MovenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovenameStddevFieldsModel = PokemonV2MovenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
