import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameAvgFieldsModelBase } from "./PokemonV2MovemetaailmentnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameAvgFieldsModel */
export interface PokemonV2MovemetaailmentnameAvgFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameAvgFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameAvgFields, pokemonV2MovemetaailmentnameAvgFieldsModelPrimitives, PokemonV2MovemetaailmentnameAvgFieldsModelSelector } from "./PokemonV2MovemetaailmentnameAvgFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetaailmentnameAvgFieldsModel = PokemonV2MovemetaailmentnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
