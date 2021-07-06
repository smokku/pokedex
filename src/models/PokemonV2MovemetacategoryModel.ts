import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryModelBase } from "./PokemonV2MovemetacategoryModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryModel */
export interface PokemonV2MovemetacategoryModelType extends Instance<typeof PokemonV2MovemetacategoryModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryModel */
export { selectFromPokemonV2Movemetacategory, pokemonV2MovemetacategoryModelPrimitives, PokemonV2MovemetacategoryModelSelector } from "./PokemonV2MovemetacategoryModel.base"

/**
 * PokemonV2MovemetacategoryModel
 *
 * columns and relationships of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryModel = PokemonV2MovemetacategoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
