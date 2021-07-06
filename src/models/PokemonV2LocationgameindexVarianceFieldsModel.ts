import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexVarianceFieldsModelBase } from "./PokemonV2LocationgameindexVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexVarianceFieldsModel */
export interface PokemonV2LocationgameindexVarianceFieldsModelType extends Instance<typeof PokemonV2LocationgameindexVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexVarianceFieldsModel */
export { selectFromPokemonV2LocationgameindexVarianceFields, pokemonV2LocationgameindexVarianceFieldsModelPrimitives, PokemonV2LocationgameindexVarianceFieldsModelSelector } from "./PokemonV2LocationgameindexVarianceFieldsModel.base"

/**
 * PokemonV2LocationgameindexVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationgameindexVarianceFieldsModel = PokemonV2LocationgameindexVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
