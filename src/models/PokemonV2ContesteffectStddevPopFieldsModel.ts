import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectStddevPopFieldsModelBase } from "./PokemonV2ContesteffectStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectStddevPopFieldsModel */
export interface PokemonV2ContesteffectStddevPopFieldsModelType extends Instance<typeof PokemonV2ContesteffectStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectStddevPopFieldsModel */
export { selectFromPokemonV2ContesteffectStddevPopFields, pokemonV2ContesteffectStddevPopFieldsModelPrimitives, PokemonV2ContesteffectStddevPopFieldsModelSelector } from "./PokemonV2ContesteffectStddevPopFieldsModel.base"

/**
 * PokemonV2ContesteffectStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesteffectStddevPopFieldsModel = PokemonV2ContesteffectStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
