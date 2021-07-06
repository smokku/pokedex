import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentStddevPopFieldsModelBase } from "./PokemonV2MovemetaailmentStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentStddevPopFieldsModel */
export interface PokemonV2MovemetaailmentStddevPopFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentStddevPopFieldsModel */
export { selectFromPokemonV2MovemetaailmentStddevPopFields, pokemonV2MovemetaailmentStddevPopFieldsModelPrimitives, PokemonV2MovemetaailmentStddevPopFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevPopFieldsModel.base"

/**
 * PokemonV2MovemetaailmentStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MovemetaailmentStddevPopFieldsModel = PokemonV2MovemetaailmentStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
