import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionStddevPopFields, pokemonV2PokemonspeciesdescriptionStddevPopFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspeciesdescriptionStddevPopFieldsModel = PokemonV2PokemonspeciesdescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
