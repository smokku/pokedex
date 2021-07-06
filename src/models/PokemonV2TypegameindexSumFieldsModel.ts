import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexSumFieldsModelBase } from "./PokemonV2TypegameindexSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexSumFieldsModel */
export interface PokemonV2TypegameindexSumFieldsModelType extends Instance<typeof PokemonV2TypegameindexSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexSumFieldsModel */
export { selectFromPokemonV2TypegameindexSumFields, pokemonV2TypegameindexSumFieldsModelPrimitives, PokemonV2TypegameindexSumFieldsModelSelector } from "./PokemonV2TypegameindexSumFieldsModel.base"

/**
 * PokemonV2TypegameindexSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2TypegameindexSumFieldsModel = PokemonV2TypegameindexSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
