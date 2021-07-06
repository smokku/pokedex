import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameMinFieldsModelBase } from "./PokemonV2MovemetaailmentnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameMinFieldsModel */
export interface PokemonV2MovemetaailmentnameMinFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameMinFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameMinFields, pokemonV2MovemetaailmentnameMinFieldsModelPrimitives, PokemonV2MovemetaailmentnameMinFieldsModelSelector } from "./PokemonV2MovemetaailmentnameMinFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetaailmentnameMinFieldsModel = PokemonV2MovemetaailmentnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
