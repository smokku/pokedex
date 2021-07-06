import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexMinFieldsModelBase } from "./PokemonV2PokemongameindexMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexMinFieldsModel */
export interface PokemonV2PokemongameindexMinFieldsModelType extends Instance<typeof PokemonV2PokemongameindexMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexMinFieldsModel */
export { selectFromPokemonV2PokemongameindexMinFields, pokemonV2PokemongameindexMinFieldsModelPrimitives, PokemonV2PokemongameindexMinFieldsModelSelector } from "./PokemonV2PokemongameindexMinFieldsModel.base"

/**
 * PokemonV2PokemongameindexMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemongameindexMinFieldsModel = PokemonV2PokemongameindexMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
