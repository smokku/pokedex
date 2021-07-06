import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexStddevSampFieldsModelBase } from "./PokemonV2TypegameindexStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexStddevSampFieldsModel */
export interface PokemonV2TypegameindexStddevSampFieldsModelType extends Instance<typeof PokemonV2TypegameindexStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexStddevSampFieldsModel */
export { selectFromPokemonV2TypegameindexStddevSampFields, pokemonV2TypegameindexStddevSampFieldsModelPrimitives, PokemonV2TypegameindexStddevSampFieldsModelSelector } from "./PokemonV2TypegameindexStddevSampFieldsModel.base"

/**
 * PokemonV2TypegameindexStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypegameindexStddevSampFieldsModel = PokemonV2TypegameindexStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
