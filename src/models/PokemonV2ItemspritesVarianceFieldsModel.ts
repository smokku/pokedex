import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesVarianceFieldsModelBase } from "./PokemonV2ItemspritesVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesVarianceFieldsModel */
export interface PokemonV2ItemspritesVarianceFieldsModelType extends Instance<typeof PokemonV2ItemspritesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesVarianceFieldsModel */
export { selectFromPokemonV2ItemspritesVarianceFields, pokemonV2ItemspritesVarianceFieldsModelPrimitives, PokemonV2ItemspritesVarianceFieldsModelSelector } from "./PokemonV2ItemspritesVarianceFieldsModel.base"

/**
 * PokemonV2ItemspritesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemspritesVarianceFieldsModel = PokemonV2ItemspritesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
