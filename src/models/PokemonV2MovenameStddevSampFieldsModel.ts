import { Instance } from "mobx-state-tree"
import { PokemonV2MovenameStddevSampFieldsModelBase } from "./PokemonV2MovenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovenameStddevSampFieldsModel */
export interface PokemonV2MovenameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovenameStddevSampFieldsModel */
export { selectFromPokemonV2MovenameStddevSampFields, pokemonV2MovenameStddevSampFieldsModelPrimitives, PokemonV2MovenameStddevSampFieldsModelSelector } from "./PokemonV2MovenameStddevSampFieldsModel.base"

/**
 * PokemonV2MovenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovenameStddevSampFieldsModel = PokemonV2MovenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
