import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexVarianceFieldsModelBase } from "./PokemonV2ItemgameindexVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexVarianceFieldsModel */
export interface PokemonV2ItemgameindexVarianceFieldsModelType extends Instance<typeof PokemonV2ItemgameindexVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexVarianceFieldsModel */
export { selectFromPokemonV2ItemgameindexVarianceFields, pokemonV2ItemgameindexVarianceFieldsModelPrimitives, PokemonV2ItemgameindexVarianceFieldsModelSelector } from "./PokemonV2ItemgameindexVarianceFieldsModel.base"

/**
 * PokemonV2ItemgameindexVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemgameindexVarianceFieldsModel = PokemonV2ItemgameindexVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
