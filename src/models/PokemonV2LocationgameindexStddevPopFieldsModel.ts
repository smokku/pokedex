import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexStddevPopFieldsModelBase } from "./PokemonV2LocationgameindexStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexStddevPopFieldsModel */
export interface PokemonV2LocationgameindexStddevPopFieldsModelType extends Instance<typeof PokemonV2LocationgameindexStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexStddevPopFieldsModel */
export { selectFromPokemonV2LocationgameindexStddevPopFields, pokemonV2LocationgameindexStddevPopFieldsModelPrimitives, PokemonV2LocationgameindexStddevPopFieldsModelSelector } from "./PokemonV2LocationgameindexStddevPopFieldsModel.base"

/**
 * PokemonV2LocationgameindexStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2LocationgameindexStddevPopFieldsModel = PokemonV2LocationgameindexStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
