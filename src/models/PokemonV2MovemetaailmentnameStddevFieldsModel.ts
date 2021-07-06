import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameStddevFieldsModelBase } from "./PokemonV2MovemetaailmentnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameStddevFieldsModel */
export interface PokemonV2MovemetaailmentnameStddevFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameStddevFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameStddevFields, pokemonV2MovemetaailmentnameStddevFieldsModelPrimitives, PokemonV2MovemetaailmentnameStddevFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetaailmentnameStddevFieldsModel = PokemonV2MovemetaailmentnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
