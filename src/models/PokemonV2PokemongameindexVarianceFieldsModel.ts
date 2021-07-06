import { Instance } from "mobx-state-tree"
import { PokemonV2PokemongameindexVarianceFieldsModelBase } from "./PokemonV2PokemongameindexVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemongameindexVarianceFieldsModel */
export interface PokemonV2PokemongameindexVarianceFieldsModelType extends Instance<typeof PokemonV2PokemongameindexVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemongameindexVarianceFieldsModel */
export { selectFromPokemonV2PokemongameindexVarianceFields, pokemonV2PokemongameindexVarianceFieldsModelPrimitives, PokemonV2PokemongameindexVarianceFieldsModelSelector } from "./PokemonV2PokemongameindexVarianceFieldsModel.base"

/**
 * PokemonV2PokemongameindexVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemongameindexVarianceFieldsModel = PokemonV2PokemongameindexVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
