import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexSumFieldsModelBase } from "./PokemonV2PokemongameindexSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexSumFieldsModel */
export interface PokemonV2PokemongameindexSumFieldsModelType extends Instance<typeof PokemonV2PokemongameindexSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexSumFieldsModel */
export { selectFromPokemonV2PokemongameindexSumFields, pokemonV2PokemongameindexSumFieldsModelPrimitives, PokemonV2PokemongameindexSumFieldsModelSelector } from "./PokemonV2PokemongameindexSumFieldsModel.base"

/**
 * PokemonV2PokemongameindexSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemongameindexSumFieldsModel = PokemonV2PokemongameindexSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
