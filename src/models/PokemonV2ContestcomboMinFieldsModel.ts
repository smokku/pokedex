import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboMinFieldsModelBase } from "./PokemonV2ContestcomboMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboMinFieldsModel */
export interface PokemonV2ContestcomboMinFieldsModelType extends Instance<typeof PokemonV2ContestcomboMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboMinFieldsModel */
export { selectFromPokemonV2ContestcomboMinFields, pokemonV2ContestcomboMinFieldsModelPrimitives, PokemonV2ContestcomboMinFieldsModelSelector } from "./PokemonV2ContestcomboMinFieldsModel.base"

/**
 * PokemonV2ContestcomboMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContestcomboMinFieldsModel = PokemonV2ContestcomboMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
