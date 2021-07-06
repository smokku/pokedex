import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorMinFieldsModelBase } from "./PokemonV2PokemoncolorMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorMinFieldsModel */
export interface PokemonV2PokemoncolorMinFieldsModelType extends Instance<typeof PokemonV2PokemoncolorMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorMinFieldsModel */
export { selectFromPokemonV2PokemoncolorMinFields, pokemonV2PokemoncolorMinFieldsModelPrimitives, PokemonV2PokemoncolorMinFieldsModelSelector } from "./PokemonV2PokemoncolorMinFieldsModel.base"

/**
 * PokemonV2PokemoncolorMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemoncolorMinFieldsModel = PokemonV2PokemoncolorMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
