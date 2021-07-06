import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentVarianceFieldsModelBase } from "./PokemonV2MovemetaailmentVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentVarianceFieldsModel */
export interface PokemonV2MovemetaailmentVarianceFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentVarianceFieldsModel */
export { selectFromPokemonV2MovemetaailmentVarianceFields, pokemonV2MovemetaailmentVarianceFieldsModelPrimitives, PokemonV2MovemetaailmentVarianceFieldsModelSelector } from "./PokemonV2MovemetaailmentVarianceFieldsModel.base"

/**
 * PokemonV2MovemetaailmentVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovemetaailmentVarianceFieldsModel = PokemonV2MovemetaailmentVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
