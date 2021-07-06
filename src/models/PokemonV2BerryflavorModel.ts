import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorModelBase } from "./PokemonV2BerryflavorModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorModel */
export interface PokemonV2BerryflavorModelType extends Instance<typeof PokemonV2BerryflavorModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorModel */
export { selectFromPokemonV2Berryflavor, pokemonV2BerryflavorModelPrimitives, PokemonV2BerryflavorModelSelector } from "./PokemonV2BerryflavorModel.base"

/**
 * PokemonV2BerryflavorModel
 *
 * columns and relationships of "pokemon_v2_berryflavor"
 */
export const PokemonV2BerryflavorModel = PokemonV2BerryflavorModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
