import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodMinFieldsModelBase } from "./PokemonV2EncountermethodMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodMinFieldsModel */
export interface PokemonV2EncountermethodMinFieldsModelType extends Instance<typeof PokemonV2EncountermethodMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodMinFieldsModel */
export { selectFromPokemonV2EncountermethodMinFields, pokemonV2EncountermethodMinFieldsModelPrimitives, PokemonV2EncountermethodMinFieldsModelSelector } from "./PokemonV2EncountermethodMinFieldsModel.base"

/**
 * PokemonV2EncountermethodMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncountermethodMinFieldsModel = PokemonV2EncountermethodMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
