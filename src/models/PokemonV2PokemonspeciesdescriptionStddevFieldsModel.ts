import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionStddevFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionStddevFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionStddevFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionStddevFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionStddevFields, pokemonV2PokemonspeciesdescriptionStddevFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionStddevFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspeciesdescriptionStddevFieldsModel = PokemonV2PokemonspeciesdescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
