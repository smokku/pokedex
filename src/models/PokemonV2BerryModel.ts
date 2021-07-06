import { Instance } from "mobx-state-tree"
import { PokemonV2BerryModelBase } from "./PokemonV2BerryModel.base"

/* The TypeScript type of an instance of PokemonV2BerryModel */
export interface PokemonV2BerryModelType extends Instance<typeof PokemonV2BerryModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryModel */
export { selectFromPokemonV2Berry, pokemonV2BerryModelPrimitives, PokemonV2BerryModelSelector } from "./PokemonV2BerryModel.base"

/**
 * PokemonV2BerryModel
 *
 * columns and relationships of "pokemon_v2_berry"
 */
export const PokemonV2BerryModel = PokemonV2BerryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
