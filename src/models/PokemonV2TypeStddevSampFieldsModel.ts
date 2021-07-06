import { Instance } from "mobx-state-tree"
import { PokemonV2TypeStddevSampFieldsModelBase } from "./PokemonV2TypeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeStddevSampFieldsModel */
export interface PokemonV2TypeStddevSampFieldsModelType extends Instance<typeof PokemonV2TypeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeStddevSampFieldsModel */
export { selectFromPokemonV2TypeStddevSampFields, pokemonV2TypeStddevSampFieldsModelPrimitives, PokemonV2TypeStddevSampFieldsModelSelector } from "./PokemonV2TypeStddevSampFieldsModel.base"

/**
 * PokemonV2TypeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypeStddevSampFieldsModel = PokemonV2TypeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
