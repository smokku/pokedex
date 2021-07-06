import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesModelBase } from "./PokemonV2ItemspritesModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesModel */
export interface PokemonV2ItemspritesModelType extends Instance<typeof PokemonV2ItemspritesModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesModel */
export { selectFromPokemonV2Itemsprites, pokemonV2ItemspritesModelPrimitives, PokemonV2ItemspritesModelSelector } from "./PokemonV2ItemspritesModel.base"

/**
 * PokemonV2ItemspritesModel
 *
 * columns and relationships of "pokemon_v2_itemsprites"
 */
export const PokemonV2ItemspritesModel = PokemonV2ItemspritesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
