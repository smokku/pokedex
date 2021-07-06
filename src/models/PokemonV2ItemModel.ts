import { Instance } from "mobx-state-tree"
import { PokemonV2ItemModelBase } from "./PokemonV2ItemModel.base"

/* The TypeScript type of an instance of PokemonV2ItemModel */
export interface PokemonV2ItemModelType extends Instance<typeof PokemonV2ItemModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemModel */
export { selectFromPokemonV2Item, pokemonV2ItemModelPrimitives, PokemonV2ItemModelSelector } from "./PokemonV2ItemModel.base"

/**
 * PokemonV2ItemModel
 *
 * columns and relationships of "pokemon_v2_item"
 */
export const PokemonV2ItemModel = PokemonV2ItemModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
