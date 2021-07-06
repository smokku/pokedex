import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexStddevSampFieldsModelBase } from "./PokemonV2ItemgameindexStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexStddevSampFieldsModel */
export interface PokemonV2ItemgameindexStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemgameindexStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexStddevSampFieldsModel */
export { selectFromPokemonV2ItemgameindexStddevSampFields, pokemonV2ItemgameindexStddevSampFieldsModelPrimitives, PokemonV2ItemgameindexStddevSampFieldsModelSelector } from "./PokemonV2ItemgameindexStddevSampFieldsModel.base"

/**
 * PokemonV2ItemgameindexStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemgameindexStddevSampFieldsModel = PokemonV2ItemgameindexStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
