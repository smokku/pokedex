import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionAvgFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionAvgFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionAvgFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionAvgFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionAvgFields, pokemonV2PokemonspeciesdescriptionAvgFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionAvgFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionAvgFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspeciesdescriptionAvgFieldsModel = PokemonV2PokemonspeciesdescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
