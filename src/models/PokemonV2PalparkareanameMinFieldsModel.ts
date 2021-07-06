import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameMinFieldsModelBase } from "./PokemonV2PalparkareanameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameMinFieldsModel */
export interface PokemonV2PalparkareanameMinFieldsModelType extends Instance<typeof PokemonV2PalparkareanameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameMinFieldsModel */
export { selectFromPokemonV2PalparkareanameMinFields, pokemonV2PalparkareanameMinFieldsModelPrimitives, PokemonV2PalparkareanameMinFieldsModelSelector } from "./PokemonV2PalparkareanameMinFieldsModel.base"

/**
 * PokemonV2PalparkareanameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PalparkareanameMinFieldsModel = PokemonV2PalparkareanameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
