import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontestcomboMinFieldsModelBase } from "./PokemonV2SupercontestcomboMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontestcomboMinFieldsModel */
export interface PokemonV2SupercontestcomboMinFieldsModelType extends Instance<typeof PokemonV2SupercontestcomboMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontestcomboMinFieldsModel */
export { selectFromPokemonV2SupercontestcomboMinFields, pokemonV2SupercontestcomboMinFieldsModelPrimitives, PokemonV2SupercontestcomboMinFieldsModelSelector } from "./PokemonV2SupercontestcomboMinFieldsModel.base"

/**
 * PokemonV2SupercontestcomboMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2SupercontestcomboMinFieldsModel = PokemonV2SupercontestcomboMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
