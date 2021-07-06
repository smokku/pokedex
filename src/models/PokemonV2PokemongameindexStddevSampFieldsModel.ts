import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexStddevSampFieldsModelBase } from "./PokemonV2PokemongameindexStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexStddevSampFieldsModel */
export interface PokemonV2PokemongameindexStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemongameindexStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexStddevSampFieldsModel */
export { selectFromPokemonV2PokemongameindexStddevSampFields, pokemonV2PokemongameindexStddevSampFieldsModelPrimitives, PokemonV2PokemongameindexStddevSampFieldsModelSelector } from "./PokemonV2PokemongameindexStddevSampFieldsModel.base"

/**
 * PokemonV2PokemongameindexStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemongameindexStddevSampFieldsModel = PokemonV2PokemongameindexStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
