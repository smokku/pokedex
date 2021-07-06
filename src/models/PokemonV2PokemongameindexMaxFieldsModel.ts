import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexMaxFieldsModelBase } from "./PokemonV2PokemongameindexMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexMaxFieldsModel */
export interface PokemonV2PokemongameindexMaxFieldsModelType extends Instance<typeof PokemonV2PokemongameindexMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexMaxFieldsModel */
export { selectFromPokemonV2PokemongameindexMaxFields, pokemonV2PokemongameindexMaxFieldsModelPrimitives, PokemonV2PokemongameindexMaxFieldsModelSelector } from "./PokemonV2PokemongameindexMaxFieldsModel.base"

/**
 * PokemonV2PokemongameindexMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemongameindexMaxFieldsModel = PokemonV2PokemongameindexMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
