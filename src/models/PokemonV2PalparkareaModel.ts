import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaModelBase } from "./PokemonV2PalparkareaModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaModel */
export interface PokemonV2PalparkareaModelType extends Instance<typeof PokemonV2PalparkareaModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaModel */
export { selectFromPokemonV2Palparkarea, pokemonV2PalparkareaModelPrimitives, PokemonV2PalparkareaModelSelector } from "./PokemonV2PalparkareaModel.base"

/**
 * PokemonV2PalparkareaModel
 *
 * columns and relationships of "pokemon_v2_palparkarea"
 */
export const PokemonV2PalparkareaModel = PokemonV2PalparkareaModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
