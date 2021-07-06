import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexStddevFieldsModelBase } from "./PokemonV2PokemongameindexStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexStddevFieldsModel */
export interface PokemonV2PokemongameindexStddevFieldsModelType extends Instance<typeof PokemonV2PokemongameindexStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexStddevFieldsModel */
export { selectFromPokemonV2PokemongameindexStddevFields, pokemonV2PokemongameindexStddevFieldsModelPrimitives, PokemonV2PokemongameindexStddevFieldsModelSelector } from "./PokemonV2PokemongameindexStddevFieldsModel.base"

/**
 * PokemonV2PokemongameindexStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemongameindexStddevFieldsModel = PokemonV2PokemongameindexStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
