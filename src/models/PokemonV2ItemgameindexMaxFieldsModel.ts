import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexMaxFieldsModelBase } from "./PokemonV2ItemgameindexMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexMaxFieldsModel */
export interface PokemonV2ItemgameindexMaxFieldsModelType extends Instance<typeof PokemonV2ItemgameindexMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexMaxFieldsModel */
export { selectFromPokemonV2ItemgameindexMaxFields, pokemonV2ItemgameindexMaxFieldsModelPrimitives, PokemonV2ItemgameindexMaxFieldsModelSelector } from "./PokemonV2ItemgameindexMaxFieldsModel.base"

/**
 * PokemonV2ItemgameindexMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemgameindexMaxFieldsModel = PokemonV2ItemgameindexMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
