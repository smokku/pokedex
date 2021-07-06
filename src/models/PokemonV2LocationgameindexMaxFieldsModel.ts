import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexMaxFieldsModelBase } from "./PokemonV2LocationgameindexMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexMaxFieldsModel */
export interface PokemonV2LocationgameindexMaxFieldsModelType extends Instance<typeof PokemonV2LocationgameindexMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexMaxFieldsModel */
export { selectFromPokemonV2LocationgameindexMaxFields, pokemonV2LocationgameindexMaxFieldsModelPrimitives, PokemonV2LocationgameindexMaxFieldsModelSelector } from "./PokemonV2LocationgameindexMaxFieldsModel.base"

/**
 * PokemonV2LocationgameindexMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2LocationgameindexMaxFieldsModel = PokemonV2LocationgameindexMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
