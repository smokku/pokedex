import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexStddevSampFieldsModelBase } from "./PokemonV2LocationgameindexStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexStddevSampFieldsModel */
export interface PokemonV2LocationgameindexStddevSampFieldsModelType extends Instance<typeof PokemonV2LocationgameindexStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexStddevSampFieldsModel */
export { selectFromPokemonV2LocationgameindexStddevSampFields, pokemonV2LocationgameindexStddevSampFieldsModelPrimitives, PokemonV2LocationgameindexStddevSampFieldsModelSelector } from "./PokemonV2LocationgameindexStddevSampFieldsModel.base"

/**
 * PokemonV2LocationgameindexStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2LocationgameindexStddevSampFieldsModel = PokemonV2LocationgameindexStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
