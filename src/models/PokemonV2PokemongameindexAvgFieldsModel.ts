import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexAvgFieldsModelBase } from "./PokemonV2PokemongameindexAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexAvgFieldsModel */
export interface PokemonV2PokemongameindexAvgFieldsModelType extends Instance<typeof PokemonV2PokemongameindexAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexAvgFieldsModel */
export { selectFromPokemonV2PokemongameindexAvgFields, pokemonV2PokemongameindexAvgFieldsModelPrimitives, PokemonV2PokemongameindexAvgFieldsModelSelector } from "./PokemonV2PokemongameindexAvgFieldsModel.base"

/**
 * PokemonV2PokemongameindexAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemongameindexAvgFieldsModel = PokemonV2PokemongameindexAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
