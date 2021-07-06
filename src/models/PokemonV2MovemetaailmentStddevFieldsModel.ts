import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentStddevFieldsModelBase } from "./PokemonV2MovemetaailmentStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentStddevFieldsModel */
export interface PokemonV2MovemetaailmentStddevFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentStddevFieldsModel */
export { selectFromPokemonV2MovemetaailmentStddevFields, pokemonV2MovemetaailmentStddevFieldsModelPrimitives, PokemonV2MovemetaailmentStddevFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevFieldsModel.base"

/**
 * PokemonV2MovemetaailmentStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MovemetaailmentStddevFieldsModel = PokemonV2MovemetaailmentStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
