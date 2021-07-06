import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexStddevFieldsModelBase } from "./PokemonV2LocationgameindexStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexStddevFieldsModel */
export interface PokemonV2LocationgameindexStddevFieldsModelType extends Instance<typeof PokemonV2LocationgameindexStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexStddevFieldsModel */
export { selectFromPokemonV2LocationgameindexStddevFields, pokemonV2LocationgameindexStddevFieldsModelPrimitives, PokemonV2LocationgameindexStddevFieldsModelSelector } from "./PokemonV2LocationgameindexStddevFieldsModel.base"

/**
 * PokemonV2LocationgameindexStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationgameindexStddevFieldsModel = PokemonV2LocationgameindexStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
