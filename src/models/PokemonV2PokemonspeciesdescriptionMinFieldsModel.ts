import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionMinFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionMinFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionMinFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionMinFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionMinFields, pokemonV2PokemonspeciesdescriptionMinFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionMinFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionMinFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesdescriptionMinFieldsModel = PokemonV2PokemonspeciesdescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
