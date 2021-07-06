import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentMinFieldsModelBase } from "./PokemonV2MovemetaailmentMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentMinFieldsModel */
export interface PokemonV2MovemetaailmentMinFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentMinFieldsModel */
export { selectFromPokemonV2MovemetaailmentMinFields, pokemonV2MovemetaailmentMinFieldsModelPrimitives, PokemonV2MovemetaailmentMinFieldsModelSelector } from "./PokemonV2MovemetaailmentMinFieldsModel.base"

/**
 * PokemonV2MovemetaailmentMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetaailmentMinFieldsModel = PokemonV2MovemetaailmentMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
