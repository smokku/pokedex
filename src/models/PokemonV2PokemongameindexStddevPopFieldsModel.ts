import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexStddevPopFieldsModelBase } from "./PokemonV2PokemongameindexStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexStddevPopFieldsModel */
export interface PokemonV2PokemongameindexStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemongameindexStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexStddevPopFieldsModel */
export { selectFromPokemonV2PokemongameindexStddevPopFields, pokemonV2PokemongameindexStddevPopFieldsModelPrimitives, PokemonV2PokemongameindexStddevPopFieldsModelSelector } from "./PokemonV2PokemongameindexStddevPopFieldsModel.base"

/**
 * PokemonV2PokemongameindexStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemongameindexStddevPopFieldsModel = PokemonV2PokemongameindexStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
