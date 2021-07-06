import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupModelBase } from "./PokemonV2PokedexversiongroupModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupModel */
export interface PokemonV2PokedexversiongroupModelType extends Instance<typeof PokemonV2PokedexversiongroupModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupModel */
export { selectFromPokemonV2Pokedexversiongroup, pokemonV2PokedexversiongroupModelPrimitives, PokemonV2PokedexversiongroupModelSelector } from "./PokemonV2PokedexversiongroupModel.base"

/**
 * PokemonV2PokedexversiongroupModel
 *
 * columns and relationships of "pokemon_v2_pokedexversiongroup"
 */
export const PokemonV2PokedexversiongroupModel = PokemonV2PokedexversiongroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
