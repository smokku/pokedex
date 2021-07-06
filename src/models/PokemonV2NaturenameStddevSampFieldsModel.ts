import { Instance } from "mobx-state-tree"
import { PokemonV2NaturenameStddevSampFieldsModelBase } from "./PokemonV2NaturenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturenameStddevSampFieldsModel */
export interface PokemonV2NaturenameStddevSampFieldsModelType extends Instance<typeof PokemonV2NaturenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturenameStddevSampFieldsModel */
export { selectFromPokemonV2NaturenameStddevSampFields, pokemonV2NaturenameStddevSampFieldsModelPrimitives, PokemonV2NaturenameStddevSampFieldsModelSelector } from "./PokemonV2NaturenameStddevSampFieldsModel.base"

/**
 * PokemonV2NaturenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NaturenameStddevSampFieldsModel = PokemonV2NaturenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
