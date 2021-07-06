import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentnameStddevSampFieldsModelBase } from "./PokemonV2MovemetaailmentnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentnameStddevSampFieldsModel */
export interface PokemonV2MovemetaailmentnameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentnameStddevSampFieldsModel */
export { selectFromPokemonV2MovemetaailmentnameStddevSampFields, pokemonV2MovemetaailmentnameStddevSampFieldsModelPrimitives, PokemonV2MovemetaailmentnameStddevSampFieldsModelSelector } from "./PokemonV2MovemetaailmentnameStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetaailmentnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetaailmentnameStddevSampFieldsModel = PokemonV2MovemetaailmentnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
