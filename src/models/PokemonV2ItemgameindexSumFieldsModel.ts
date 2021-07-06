import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexSumFieldsModelBase } from "./PokemonV2ItemgameindexSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexSumFieldsModel */
export interface PokemonV2ItemgameindexSumFieldsModelType extends Instance<typeof PokemonV2ItemgameindexSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexSumFieldsModel */
export { selectFromPokemonV2ItemgameindexSumFields, pokemonV2ItemgameindexSumFieldsModelPrimitives, PokemonV2ItemgameindexSumFieldsModelSelector } from "./PokemonV2ItemgameindexSumFieldsModel.base"

/**
 * PokemonV2ItemgameindexSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemgameindexSumFieldsModel = PokemonV2ItemgameindexSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
