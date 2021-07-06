import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboStddevFieldsModelBase } from "./PokemonV2ContestcomboStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboStddevFieldsModel */
export interface PokemonV2ContestcomboStddevFieldsModelType extends Instance<typeof PokemonV2ContestcomboStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboStddevFieldsModel */
export { selectFromPokemonV2ContestcomboStddevFields, pokemonV2ContestcomboStddevFieldsModelPrimitives, PokemonV2ContestcomboStddevFieldsModelSelector } from "./PokemonV2ContestcomboStddevFieldsModel.base"

/**
 * PokemonV2ContestcomboStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContestcomboStddevFieldsModel = PokemonV2ContestcomboStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
