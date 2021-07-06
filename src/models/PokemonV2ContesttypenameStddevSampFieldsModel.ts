import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameStddevSampFieldsModelBase } from "./PokemonV2ContesttypenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameStddevSampFieldsModel */
export interface PokemonV2ContesttypenameStddevSampFieldsModelType extends Instance<typeof PokemonV2ContesttypenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameStddevSampFieldsModel */
export { selectFromPokemonV2ContesttypenameStddevSampFields, pokemonV2ContesttypenameStddevSampFieldsModelPrimitives, PokemonV2ContesttypenameStddevSampFieldsModelSelector } from "./PokemonV2ContesttypenameStddevSampFieldsModel.base"

/**
 * PokemonV2ContesttypenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ContesttypenameStddevSampFieldsModel = PokemonV2ContesttypenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
