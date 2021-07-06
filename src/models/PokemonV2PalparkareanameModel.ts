import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameModelBase } from "./PokemonV2PalparkareanameModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameModel */
export interface PokemonV2PalparkareanameModelType extends Instance<typeof PokemonV2PalparkareanameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameModel */
export { selectFromPokemonV2Palparkareaname, pokemonV2PalparkareanameModelPrimitives, PokemonV2PalparkareanameModelSelector } from "./PokemonV2PalparkareanameModel.base"

/**
 * PokemonV2PalparkareanameModel
 *
 * columns and relationships of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameModel = PokemonV2PalparkareanameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
