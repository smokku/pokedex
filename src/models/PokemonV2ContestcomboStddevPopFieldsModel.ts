import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboStddevPopFieldsModelBase } from "./PokemonV2ContestcomboStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboStddevPopFieldsModel */
export interface PokemonV2ContestcomboStddevPopFieldsModelType extends Instance<typeof PokemonV2ContestcomboStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboStddevPopFieldsModel */
export { selectFromPokemonV2ContestcomboStddevPopFields, pokemonV2ContestcomboStddevPopFieldsModelPrimitives, PokemonV2ContestcomboStddevPopFieldsModelSelector } from "./PokemonV2ContestcomboStddevPopFieldsModel.base"

/**
 * PokemonV2ContestcomboStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContestcomboStddevPopFieldsModel = PokemonV2ContestcomboStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
