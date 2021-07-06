import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameAvgFieldsModelBase } from "./PokemonV2PalparkareanameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameAvgFieldsModel */
export interface PokemonV2PalparkareanameAvgFieldsModelType extends Instance<typeof PokemonV2PalparkareanameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameAvgFieldsModel */
export { selectFromPokemonV2PalparkareanameAvgFields, pokemonV2PalparkareanameAvgFieldsModelPrimitives, PokemonV2PalparkareanameAvgFieldsModelSelector } from "./PokemonV2PalparkareanameAvgFieldsModel.base"

/**
 * PokemonV2PalparkareanameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PalparkareanameAvgFieldsModel = PokemonV2PalparkareanameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
