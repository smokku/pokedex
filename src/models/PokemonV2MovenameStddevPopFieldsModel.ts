import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameStddevPopFieldsModelBase } from "./PokemonV2MovenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameStddevPopFieldsModel */
export interface PokemonV2MovenameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameStddevPopFieldsModel */
export { selectFromPokemonV2MovenameStddevPopFields, pokemonV2MovenameStddevPopFieldsModelPrimitives, PokemonV2MovenameStddevPopFieldsModelSelector } from "./PokemonV2MovenameStddevPopFieldsModel.base"

/**
 * PokemonV2MovenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovenameStddevPopFieldsModel = PokemonV2MovenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
