import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameStddevFieldsModelBase } from "./PokemonV2PalparkareanameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameStddevFieldsModel */
export interface PokemonV2PalparkareanameStddevFieldsModelType extends Instance<typeof PokemonV2PalparkareanameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameStddevFieldsModel */
export { selectFromPokemonV2PalparkareanameStddevFields, pokemonV2PalparkareanameStddevFieldsModelPrimitives, PokemonV2PalparkareanameStddevFieldsModelSelector } from "./PokemonV2PalparkareanameStddevFieldsModel.base"

/**
 * PokemonV2PalparkareanameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PalparkareanameStddevFieldsModel = PokemonV2PalparkareanameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
