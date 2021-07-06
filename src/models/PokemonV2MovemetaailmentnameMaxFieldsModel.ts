import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameMaxFieldsModelBase } from "./PokemonV2MovemetaailmentnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameMaxFieldsModel */
export interface PokemonV2MovemetaailmentnameMaxFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameMaxFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameMaxFields, pokemonV2MovemetaailmentnameMaxFieldsModelPrimitives, PokemonV2MovemetaailmentnameMaxFieldsModelSelector } from "./PokemonV2MovemetaailmentnameMaxFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetaailmentnameMaxFieldsModel = PokemonV2MovemetaailmentnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
