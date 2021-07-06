import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesMinFieldsModelBase } from "./PokemonV2ItemspritesMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesMinFieldsModel */
export interface PokemonV2ItemspritesMinFieldsModelType extends Instance<typeof PokemonV2ItemspritesMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesMinFieldsModel */
export { selectFromPokemonV2ItemspritesMinFields, pokemonV2ItemspritesMinFieldsModelPrimitives, PokemonV2ItemspritesMinFieldsModelSelector } from "./PokemonV2ItemspritesMinFieldsModel.base"

/**
 * PokemonV2ItemspritesMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemspritesMinFieldsModel = PokemonV2ItemspritesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
