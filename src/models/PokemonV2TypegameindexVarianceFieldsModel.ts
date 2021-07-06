import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexVarianceFieldsModelBase } from "./PokemonV2TypegameindexVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexVarianceFieldsModel */
export interface PokemonV2TypegameindexVarianceFieldsModelType extends Instance<typeof PokemonV2TypegameindexVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexVarianceFieldsModel */
export { selectFromPokemonV2TypegameindexVarianceFields, pokemonV2TypegameindexVarianceFieldsModelPrimitives, PokemonV2TypegameindexVarianceFieldsModelSelector } from "./PokemonV2TypegameindexVarianceFieldsModel.base"

/**
 * PokemonV2TypegameindexVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2TypegameindexVarianceFieldsModel = PokemonV2TypegameindexVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
