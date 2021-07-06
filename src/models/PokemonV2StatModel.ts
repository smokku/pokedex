import { Instance } from "mobx-state-tree"
import { PokemonV2StatModelBase } from "./PokemonV2StatModel.base"

/* The TypeScript type of an instance of PokemonV2StatModel */
export interface PokemonV2StatModelType extends Instance<typeof PokemonV2StatModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatModel */
export { selectFromPokemonV2Stat, pokemonV2StatModelPrimitives, PokemonV2StatModelSelector } from "./PokemonV2StatModel.base"

/**
 * PokemonV2StatModel
 *
 * columns and relationships of "pokemon_v2_stat"
 */
export const PokemonV2StatModel = PokemonV2StatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
