import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameModelBase } from "./PokemonV2PokemonformnameModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameModel */
export interface PokemonV2PokemonformnameModelType extends Instance<typeof PokemonV2PokemonformnameModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameModel */
export { selectFromPokemonV2Pokemonformname, pokemonV2PokemonformnameModelPrimitives, PokemonV2PokemonformnameModelSelector } from "./PokemonV2PokemonformnameModel.base"

/**
 * PokemonV2PokemonformnameModel
 *
 * columns and relationships of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameModel = PokemonV2PokemonformnameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
