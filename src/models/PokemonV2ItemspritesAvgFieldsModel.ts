import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesAvgFieldsModelBase } from "./PokemonV2ItemspritesAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesAvgFieldsModel */
export interface PokemonV2ItemspritesAvgFieldsModelType extends Instance<typeof PokemonV2ItemspritesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesAvgFieldsModel */
export { selectFromPokemonV2ItemspritesAvgFields, pokemonV2ItemspritesAvgFieldsModelPrimitives, PokemonV2ItemspritesAvgFieldsModelSelector } from "./PokemonV2ItemspritesAvgFieldsModel.base"

/**
 * PokemonV2ItemspritesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemspritesAvgFieldsModel = PokemonV2ItemspritesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
