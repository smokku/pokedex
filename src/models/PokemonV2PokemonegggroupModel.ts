import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupModelBase } from "./PokemonV2PokemonegggroupModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupModel */
export interface PokemonV2PokemonegggroupModelType extends Instance<typeof PokemonV2PokemonegggroupModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupModel */
export { selectFromPokemonV2Pokemonegggroup, pokemonV2PokemonegggroupModelPrimitives, PokemonV2PokemonegggroupModelSelector } from "./PokemonV2PokemonegggroupModel.base"

/**
 * PokemonV2PokemonegggroupModel
 *
 * columns and relationships of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupModel = PokemonV2PokemonegggroupModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
