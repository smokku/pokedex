import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameStddevPopFieldsModelBase } from "./PokemonV2MovemetaailmentnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameStddevPopFieldsModel */
export interface PokemonV2MovemetaailmentnameStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameStddevPopFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameStddevPopFields, pokemonV2MovemetaailmentnameStddevPopFieldsModelPrimitives, PokemonV2MovemetaailmentnameStddevPopFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetaailmentnameStddevPopFieldsModel = PokemonV2MovemetaailmentnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
