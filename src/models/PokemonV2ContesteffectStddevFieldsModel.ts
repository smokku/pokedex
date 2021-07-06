import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectStddevFieldsModelBase } from "./PokemonV2ContesteffectStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectStddevFieldsModel */
export interface PokemonV2ContesteffectStddevFieldsModelType extends Instance<typeof PokemonV2ContesteffectStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectStddevFieldsModel */
export { selectFromPokemonV2ContesteffectStddevFields, pokemonV2ContesteffectStddevFieldsModelPrimitives, PokemonV2ContesteffectStddevFieldsModelSelector } from "./PokemonV2ContesteffectStddevFieldsModel.base"

/**
 * PokemonV2ContesteffectStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesteffectStddevFieldsModel = PokemonV2ContesteffectStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
