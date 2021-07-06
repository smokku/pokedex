import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameStddevSampFieldsModelBase } from "./PokemonV2GenerationnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameStddevSampFieldsModel */
export interface PokemonV2GenerationnameStddevSampFieldsModelType extends Instance<typeof PokemonV2GenerationnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameStddevSampFieldsModel */
export { selectFromPokemonV2GenerationnameStddevSampFields, pokemonV2GenerationnameStddevSampFieldsModelPrimitives, PokemonV2GenerationnameStddevSampFieldsModelSelector } from "./PokemonV2GenerationnameStddevSampFieldsModel.base"

/**
 * PokemonV2GenerationnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GenerationnameStddevSampFieldsModel = PokemonV2GenerationnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
